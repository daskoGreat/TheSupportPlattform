import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import { notFound } from 'next/navigation';
import { getServerT } from '@/i18n/server';
import BookingClient from './BookingClient';

interface BookingPageProps {
    params: { id: string };
}

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const t = await getServerT();

    const coach = await prisma.user.findUnique({
        where: { id: id },
        include: {
            coachProfile: true
        }
    });

    if (!coach || !coach.coachProfile) {
        notFound();
    }

    return <BookingClient coach={coach} />;
}
