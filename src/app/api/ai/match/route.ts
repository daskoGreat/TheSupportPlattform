import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { text } = body;
        const input = text.toLowerCase();
        console.log("[AI Match] Request received:", input);

        // 1. Define support categories with expanded keyword mapping
        const categories = [
            { name: "Stress", keywords: ["stress", "pressur", "overwhelmed", "busy", "load"] },
            { name: "Anxiety", keywords: ["anxiety", "panic", "worry", "fear", "overthink"] },
            { name: "Burnout", keywords: ["burnout", "tired", "exhausted", "drain", "energy"] },
            { name: "Relationships", keywords: ["breakup", "partner", "family", "friend", "divorce", "dating"] },
            { name: "Loneliness", keywords: ["lonely", "alone", "isolated", "connection"] },
            { name: "Grief", keywords: ["grief", "loss", "death", "mourning"] },
            { name: "Self-esteem", keywords: ["confidence", "self-esteem", "worth", "insecure"] },
            { name: "Work pressure", keywords: ["work", "job", "career", "office", "boss"] },
            { name: "Mental wellbeing", keywords: ["wellbeing", "health", "mind", "inner"] }
        ];

        // 2. Detect multiple matching categories
        const matchedCategories = categories
            .filter(cat => cat.keywords.some(kw => input.includes(kw)))
            .map(cat => cat.name);

        if (matchedCategories.length === 0) {
            // Default to mental wellbeing if no specific category matched
            matchedCategories.push("Mental wellbeing");
        }
        console.log("[AI Match] Matched categories:", matchedCategories);

        // 3. Query coaches that match these specialties
        console.log("[AI Match] Querying coaches...");
        const coaches = await prisma.coachProfile.findMany({
            where: {
                expertise: {
                    hasSome: matchedCategories
                },
                isActive: true
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                        id: true
                    }
                }
            },
            take: 3
        });
        console.log("[AI Match] Coaches found:", coaches.length);

        // 4. Query resources that match these categories
        console.log("[AI Match] Querying resources...");
        const matchedResources = await (prisma as any).resource.findMany({
            where: {
                OR: matchedCategories.map(cat => ({
                    category: { contains: cat, mode: 'insensitive' }
                }))
            },
            take: 3
        });
        console.log("[AI Match] Resources found:", matchedResources.length);

        const response = {
            matched: true,
            categories: matchedCategories,
            coaches: coaches.map((c: any) => ({
                id: c.user.id,
                name: c.user.name,
                avatar: c.user.image,
                title: c.title,
                shortIntro: c.shortIntro,
                expertise: c.expertise
            })),
            resources: matchedResources.map((r: any) => ({
                id: r.id,
                title: r.title,
                description: r.description,
                category: r.category
            }))
        };
        return NextResponse.json(response);

    } catch (error: any) {
        console.error("[AI Match] Error details:", error.message || error);
        if (error.code) console.error("[AI Match] Error code:", error.code);
        return NextResponse.json({ error: "Failed to find matches", details: error.message }, { status: 500 });
    }
}
