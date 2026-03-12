import { auth } from "@/auth";
import prisma from "@/lib/prisma";
export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { coachId } = await req.json();

        // 1. Try to find existing conversation
        let conversation = await prisma.conversation.findFirst({
            where: {
                participants: {
                    every: {
                        userId: { in: [session.user.id, coachId] }
                    }
                }
            }
        });

        // 2. If not found, create new one
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    participants: {
                        create: [
                            { userId: session.user.id },
                            { userId: coachId }
                        ]
                    }
                }
            });
        }

        return NextResponse.json(conversation);
    } catch (error) {
        console.error("Failed to start conversation:", error);
        return NextResponse.json({ error: "Failed to start conversation" }, { status: 500 });
    }
}
