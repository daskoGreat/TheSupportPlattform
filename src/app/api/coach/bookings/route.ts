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

        const { start, end, coachId, type } = await req.json();

        const startTime = new Date(start);
        const endTime = new Date(end);

        const booking = await prisma.booking.create({
            data: {
                userId: session.user.id,
                coachId: coachId,
                startTime,
                endTime,
                type: type || "VIDEO",
                status: "CONFIRMED"
            }
        });

        return NextResponse.json(booking);
    } catch (error) {
        console.error("Booking failed:", error);
        return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
    }
}
