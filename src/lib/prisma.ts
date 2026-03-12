import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

// Required for Neon to work in local Node environments if using the serverless driver
if (typeof window === 'undefined') {
    neonConfig.webSocketConstructor = ws;
}

const url = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
    if (url?.startsWith('prisma+postgres://')) {
        return new PrismaClient({ accelerateUrl: url });
    }

    // If it's a Neon connection, use the optimized serverless adapter
    if (url?.includes('neon.tech')) {
        const pool = new Pool({ connectionString: url });
        const adapter = new PrismaNeon(pool);
        return new PrismaClient({
            adapter,
            log: ['query', 'info', 'warn', 'error'],
        });
    }

    // Fallback for local PostgreSQL (standard pg adapter)
    const { Pool: PgPool } = require('pg');
    const { PrismaPg } = require('@prisma/adapter-pg');
    const pool = new PgPool({ connectionString: url });
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
