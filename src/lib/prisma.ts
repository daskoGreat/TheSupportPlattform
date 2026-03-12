import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `globalThis` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const prismaClientSingleton = () => {
    // Avoid construction errors during build if DATABASE_URL is somehow missing or malformed
    try {
        return new PrismaClient()
    } catch (err) {
        console.warn('PrismaClient failed to initialize. This is expected during some build phases if DB is unavailable.');
        return null as unknown as PrismaClient;
    }
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
