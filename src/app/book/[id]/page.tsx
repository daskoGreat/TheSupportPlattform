import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { getServerT } from '@/i18n/server';
import BookingClient from './BookingClient';

interface BookingPageProps {
    params: { id: string };
}

export default async function BookingPage({ params }: BookingPageProps) {
    const t = await getServerT();

    const coach = await prisma.user.findUnique({
        where: { id: params.id },
        include: {
            coachProfile: true
        }
    });

    if (!coach || !coach.coachProfile) {
        notFound();
    }

    return <BookingClient coach={coach} />;
}
