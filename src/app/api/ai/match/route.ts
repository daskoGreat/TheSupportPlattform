import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const { text } = await req.json();
        const input = text.toLowerCase();

        // 1. Define support categories
        const categories = [
            "Stress", "Anxiety", "Burnout", "Relationships", "Life transitions",
            "Loneliness", "Mental wellbeing", "Career pressure", "Self-care"
        ];

        // 2. Detect multiple matching categories based on keywords
        const matchedCategories = categories.filter(cat =>
            input.includes(cat.toLowerCase()) ||
            (cat === "Stress" && (input.includes("pressur") || input.includes("overwhelmed"))) ||
            (cat === "Burnout" && (input.includes("tired") || input.includes("exhausted"))) ||
            (cat === "Relationships" && (input.includes("partner") || input.includes("family") || input.includes("friend"))) ||
            (cat === "Anxiety" && (input.includes("panic") || input.includes("worry"))) ||
            (cat === "Career pressure" && (input.includes("work") || input.includes("job") || input.includes("boss")))
        );

        if (matchedCategories.length === 0) {
            return NextResponse.json({
                matched: false,
                message: "I didn't find specific categories, but I'm here to listen."
            });
        }

        // 3. Query coaches that match these specialties
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

        // 4. Query resources that match these categories
        const matchedResources = await (prisma as any).resource.findMany({
            where: {
                OR: matchedCategories.map(cat => ({
                    category: { contains: cat, mode: 'insensitive' }
                }))
            },
            take: 3
        });

        const response = {
            matched: coaches.length > 0 || matchedResources.length > 0,
            categories: matchedCategories,
            coaches: coaches.map((c: any) => ({
                id: c.userId,
                name: c.user.name,
                avatar: c.user.image,
                title: c.title,
                shortIntro: c.shortIntro
            })),
            resources: matchedResources.map((r: any) => ({
                id: r.id,
                title: r.title,
                description: r.description,
                category: r.category
            }))
        };
        return NextResponse.json(response);

    } catch (error) {
        console.error('Matching error:', error);
        return NextResponse.json({ error: 'Failed to find matches' }, { status: 500 });
    }
}
