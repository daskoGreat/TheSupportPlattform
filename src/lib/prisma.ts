import { PrismaClient } from '@prisma/client';

const url = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
    const maskedUrl = url ? url.replace(/:[^:]+@/, ':****@') : 'undefined';
    console.log(`[Prisma] Initializing. Vercel: ${!!process.env.VERCEL}, URL: ${maskedUrl}`);

    // On Vercel (Production), use the standard Prisma Client with the Neon Pooler URL.
    // This is the most stable and reliable configuration for Serverless Functions.
    if (process.env.VERCEL) {
        console.log('[Prisma] Using standard client for Vercel deployment');
        return new PrismaClient({
            log: ['error', 'warn'],
        });
    }

    // Local Development - Fallback to pg adapter for local PostgreSQL
    try {
        console.log('[Prisma] Using local PostgreSQL adapter');
        const { Pool: PgPool } = require('pg');
        const { PrismaPg } = require('@prisma/adapter-pg');
        const pool = new PgPool({ connectionString: url });
        const adapter = new PrismaPg(pool);

        return new PrismaClient({
            adapter,
            log: ['query', 'info', 'warn', 'error'],
        });
    } catch (e) {
        console.log('[Prisma] Adapter fallback failed, using standard client');
        return new PrismaClient();
    }
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
