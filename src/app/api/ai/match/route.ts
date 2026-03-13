import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const session = await auth();
        const body = await req.json();
        const { userInput } = body as { userInput?: string };

        if (!userInput || typeof userInput !== "string") {
            return NextResponse.json({ error: "Missing input" }, { status: 400 });
        }

        const text = userInput.trim();
        const lowered = text.toLowerCase();
        const userId = session?.user?.id ?? null;

        // 1) Find or create AiSession for this user
        let aiSession = userId
            ? await prisma.aiSession.findFirst({
                  where: { userId },
                  orderBy: { createdAt: "desc" },
              })
            : null;

        if (!aiSession && userId) {
            aiSession = await prisma.aiSession.create({
                data: {
                    userId,
                    extractedNeeds: [],
                },
            });
        }

        // 2) Persist user + assistant messages if we have a session
        if (aiSession && userId) {
            await prisma.aiMessage.create({
                data: {
                    sessionId: aiSession.id,
                    role: "user",
                    content: text,
                },
            });
        }

        const assistantMessage =
            "Jag har hittat några coacher och community-förslag som kan passa dig. Välj det som känns rätt för dig.";

        if (aiSession && userId) {
            await prisma.aiMessage.create({
                data: {
                    sessionId: aiSession.id,
                    role: "assistant",
                    content: assistantMessage,
                },
            });
        }

        // 3) Score real CoachProfiles using simple keyword matching on expertise
        const allCoaches = await prisma.coachProfile.findMany({
            where: { isActive: true },
            include: { user: true },
        });

        const scored = allCoaches
            .map((coach) => {
                const tags = coach.expertise.join(" ").toLowerCase();
                let score = 0;
                if (tags.includes("stress") && lowered.includes("stress")) score += 2;
                if (tags.includes("utmatt") && lowered.includes("utmatt")) score += 2;
                if (tags.includes("burnout") && lowered.includes("burnout")) score += 2;
                if (tags.includes("anxiety") && (lowered.includes("anxiety") || lowered.includes("oro"))) score += 2;
                if (tags.includes("relation") && lowered.includes("relation")) score += 2;
                if (tags.includes("grief") && (lowered.includes("grief") || lowered.includes("sorg"))) score += 2;
                // mild baseline for more tags
                score += 0.1 * coach.expertise.length;
                return { coach, score };
            })
            .filter((c) => c.coach.user)
            .sort((a, b) => b.score - a.score)
            .slice(0, 4);

        // 4) Persist MatchResults for this session (optional but useful)
        if (aiSession && userId) {
            await prisma.matchResult.deleteMany({
                where: { sessionId: aiSession.id },
            });

            if (scored.length > 0) {
                await prisma.matchResult.createMany({
                    data: scored.map(({ coach, score }) => ({
                        sessionId: aiSession!.id,
                        coachId: coach.id,
                        score,
                        explanation:
                            "Matchad baserat på din beskrivning och coachens kompetensområden.",
                    })),
                });
            }
        }

        // 5) Minimal community suggestions (from existing MOCK_COMMUNITIES-like logic if desired)
        // For now, we keep a static shape compatible with intake UI.
        const communities = [
            {
                id: "stress-community",
                title: "Stress & återhämtning",
                description:
                    "En varm plats för dig som vill hitta tillbaka till ork och balans i vardagen.",
                members: "482",
                activity: "Aktiv idag",
            },
            {
                id: "life-changes",
                title: "Livsförändringar",
                description:
                    "För dig som går igenom stora förändringar, separationer eller nya kapitel.",
                members: "219",
                activity: "Aktiv denna vecka",
            },
        ];

        const coachesPayload = scored.map(({ coach }) => ({
            id: coach.userId,
            name: coach.user?.name ?? "Coach",
            title: coach.title,
            avatar: coach.user?.image ?? "/avatars/default-coach.png",
            specialties: coach.expertise,
            nextAvailable: "", // can be enriched from Availability later
        }));

        const response = {
            message: assistantMessage,
            coaches: coachesPayload,
            communities,
        };

        return NextResponse.json(response);
    } catch (error: any) {
        console.error("[AI Match] Error details:", error?.message || error);
        return NextResponse.json(
            { error: "Failed to find matches" },
            { status: 500 }
        );
    }
}
