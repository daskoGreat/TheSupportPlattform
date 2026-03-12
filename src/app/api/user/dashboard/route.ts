import { auth } from "@/auth";
import prisma from "@/lib/prisma";
export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userId = session.user.id;

        // 1. Get upcoming bookings
        const upcomingBookings = await prisma.booking.findMany({
            where: {
                userId: userId,
                startTime: { gte: new Date() },
                status: "CONFIRMED"
            },
            include: {
                coach: {
                    include: {
                        user: {
                            select: { name: true, image: true }
                        }
                    }
                }
            },
            orderBy: { startTime: 'asc' },
            take: 3
        });

        // 2. Get recent conversations
        const recentConversations = await prisma.conversation.findMany({
            where: {
                participants: {
                    some: { userId: userId }
                }
            },
            include: {
                participants: {
                    where: { userId: { not: userId } },
                    include: {
                        user: {
                            select: { name: true, image: true }
                        }
                    }
                } as any,
                messages: {
                    orderBy: { createdAt: 'desc' },
                    take: 1
                }
            },
            orderBy: { updatedAt: 'desc' },
            take: 3
        });

        // Correcting participant query based on schema
        // Schema: ConversationParticipant has conversationId and userId.
        // It needs a relation to User to get the name/image.

        return NextResponse.json({
            upcomingBookings,
            recentConversations
        });
    } catch (error) {
        console.error("Dashboard data fetch failed:", error);
        return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 });
    }
}
