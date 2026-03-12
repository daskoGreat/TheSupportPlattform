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

        const { date, time, coachId, type } = await req.json();

        // Calculate startTime and endTime (mocking 60 min session)
        const start = new Date(date);
        const [hours, minutes] = time.split(':');
        start.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        const end = new Date(start);
        end.setHours(start.getHours() + 1);

        const booking = await prisma.booking.create({
            data: {
                userId: session.user.id,
                coachId: coachId,
                startTime: start,
                endTime: end,
                type: type || "Video", // Video or Phone
                status: "CONFIRMED"
            }
        });

        return NextResponse.json(booking);
    } catch (error) {
        console.error("Booking failed:", error);
        return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
    }
}
