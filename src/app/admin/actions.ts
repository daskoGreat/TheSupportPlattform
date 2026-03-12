'use server';

import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

console.log("[Admin Actions] Server Actions module loaded");

export async function getUsers(search: string = '', page: number = 1, pageSize: number = 5) {
    const skip = (page - 1) * pageSize;
    const where = search ? {
        OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { email: { contains: search, mode: 'insensitive' as const } },
        ],
    } : {};
    console.log(`[getUsers] Fetching with search="${search}", page=${page}`);
    const [users, totalCount] = await Promise.all([
        prisma.user.findMany({
            where,
            skip,
            take: pageSize,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
            }
        }),
        prisma.user.count({ where }),
    ]);

    return {
        users: users.map(u => ({
            ...u,
            joined: u.createdAt.toISOString().split('T')[0],
        })),
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
    };
}

export async function getBookings(search: string = '', page: number = 1, pageSize: number = 5) {
    const skip = (page - 1) * pageSize;
    const where = search ? {
        OR: [
            { user: { name: { contains: search, mode: 'insensitive' as const } } },
            { coach: { user: { name: { contains: search, mode: 'insensitive' as const } } } },
        ],
    } : {};
    console.log(`[getBookings] Fetching with search="${search}", page=${page}`);
    const [bookings, totalCount] = await Promise.all([
        prisma.booking.findMany({
            where,
            skip,
            take: pageSize,
            orderBy: { startTime: 'desc' },
            include: {
                user: { select: { name: true } },
                coach: { include: { user: { select: { name: true } } } },
            }
        }),
        prisma.booking.count({ where }),
    ]);

    return {
        bookings: bookings.map(b => ({
            id: b.id,
            user: b.user.name || 'Unknown',
            coach: b.coach.user.name || 'Unknown',
            time: b.startTime.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
            status: b.status.charAt(0).toUpperCase() + b.status.slice(1).toLowerCase(),
        })),
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
    };
}

export async function getStats() {
    console.log(`[getStats] Fetching platform stats`);
    const [userCount, coachCount, bookingCount] = await Promise.all([
        prisma.user.count({ where: { role: Role.USER } }),
        prisma.user.count({ where: { role: Role.COACH } }),
        prisma.booking.count(),
    ]);

    console.log(`[getStats] Stats fetched successfully`);
    return {
        users: userCount,
        coaches: coachCount,
        bookings: bookingCount,
        messages: 890, // Placeholder as requested or if we have a Message model
    };
}
