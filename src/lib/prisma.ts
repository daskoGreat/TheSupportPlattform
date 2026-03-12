import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const url = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
    if (url?.startsWith('prisma+postgres://')) {
        return new PrismaClient({ accelerateUrl: url });
    }

    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaPg(pool);
    return new PrismaClient({
        adapter,
        log: ['query', 'info', 'warn', 'error'],
    });
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
