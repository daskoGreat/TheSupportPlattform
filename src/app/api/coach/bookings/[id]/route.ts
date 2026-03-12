import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const session = await auth();

        const { id: bookingId } = await params;

        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Ensure only COACH or ADMIN can modify booking status
        if ((session.user as any).role !== "COACH" && (session.user as any).role !== "ADMIN") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const body = await req.json();
        const { status } = body; // expecting "CONFIRMED" or "DECLINED"

        const updatedBooking = await prisma.booking.update({
            where: { id: bookingId },
            data: { status }
        });

        return NextResponse.json(updatedBooking);

    } catch (error) {
        console.error("Failed to update booking status", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
