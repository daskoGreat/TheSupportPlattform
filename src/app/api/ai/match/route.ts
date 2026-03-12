import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const { text } = await req.json();
        const input = text.toLowerCase();

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
            matched: true,
            categories: matchedCategories,
            coaches: coaches.map((c: any) => ({
                id: c.userId,
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

    } catch (error) {
        console.error('Matching error:', error);
        return NextResponse.json({ error: 'Failed to find matches' }, { status: 500 });
    }
}
