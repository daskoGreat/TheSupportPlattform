import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const userId = session.user.id;

        const body = await req.json();
        const { conversationId, content } = body;

        // Verify conversation access if needed, omitted for simplicity

        const newMessage = await prisma.message.create({
            data: {
                content,
                conversationId,
                senderId: userId
            }
        });

        // Update conversation's updatedAt
        await prisma.conversation.update({
            where: { id: conversationId },
            data: { updatedAt: new Date() }
        });

        return NextResponse.json(newMessage);

    } catch (error) {
        console.error("Failed to send message", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
