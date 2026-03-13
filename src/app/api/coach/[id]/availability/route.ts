import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SLOT_MINUTES = 45;
const HORIZON_DAYS = 7;

function parseTimeToMinutes(t: string): number {
    const [h, m] = t.split(":").map((v) => parseInt(v, 10));
    return h * 60 + m;
}

function makeDateForDay(base: Date, dayOffset: number, minutes: number) {
    const d = new Date(base);
    d.setDate(d.getDate() + dayOffset);
    d.setHours(0, 0, 0, 0);
    d.setMinutes(minutes);
    return d;
}

export async function GET(
    _req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const coachUserId = params.id;

        const coachProfile = await prisma.coachProfile.findUnique({
            where: { userId: coachUserId },
            select: { id: true },
        });

        if (!coachProfile) {
            return NextResponse.json({ slots: [] });
        }

        const coachId = coachProfile.id;

        const availability = await prisma.availability.findMany({
            where: { coachId, isActive: true },
        });

        const now = new Date();
        now.setSeconds(0, 0);

        const bookings = await prisma.booking.findMany({
            where: {
                coachId,
                status: { in: ["PENDING", "CONFIRMED"] },
                startTime: {
                    gte: now,
                    lt: new Date(now.getTime() + HORIZON_DAYS * 24 * 60 * 60 * 1000),
                },
            },
            select: { startTime: true, endTime: true },
        });

        const busyWindows = bookings.map((b) => ({
            start: b.startTime.getTime(),
            end: b.endTime.getTime(),
        }));

        const slots: { start: string; end: string }[] = [];

        for (let dayOffset = 0; dayOffset < HORIZON_DAYS; dayOffset++) {
            const d = new Date(now);
            d.setDate(d.getDate() + dayOffset);

            const dow = d.getDay();
            const dayAvailabilities = availability.filter((a) => a.dayOfWeek === dow);

            for (const a of dayAvailabilities) {
                const startMinutes = parseTimeToMinutes(a.startTime);
                const endMinutes = parseTimeToMinutes(a.endTime);

                for (
                    let m = startMinutes;
                    m + SLOT_MINUTES <= endMinutes;
                    m += SLOT_MINUTES
                ) {
                    const startDate = makeDateForDay(now, dayOffset, m);
                    const endDate = new Date(
                        startDate.getTime() + SLOT_MINUTES * 60 * 1000
                    );

                    if (endDate <= now) continue;

                    const startTs = startDate.getTime();
                    const endTs = endDate.getTime();

                    const overlaps = busyWindows.some(
                        (bw) => !(endTs <= bw.start || startTs >= bw.end)
                    );

                    if (!overlaps) {
                        slots.push({
                            start: startDate.toISOString(),
                            end: endDate.toISOString(),
                        });
                    }
                }
            }
        }

        return NextResponse.json({ slots });
    } catch (error) {
        console.error("Failed to compute availability", error);
        return NextResponse.json(
            { error: "Failed to compute availability", slots: [] },
            { status: 500 }
        );
    }
}

