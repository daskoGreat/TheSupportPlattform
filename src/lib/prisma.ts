import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const url = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
    const maskedUrl = url ? url.replace(/:[^:]+@/, ':****@') : 'undefined';
    console.log(`[Prisma] Initializing with URL: ${maskedUrl}`);

    if (!url) {
        throw new Error("DATABASE_URL is not defined");
    }

    // Prisma 7 requires an adapter or accelerateUrl if the schema doesn't have a url property.
    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaPg(pool);

    return new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
