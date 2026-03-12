import { PrismaClient } from '@prisma/client'
import { neon } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'

// Ensure environment variables are loaded if not already (useful for scripts)
if (typeof process !== 'undefined' && !process.env.DATABASE_URL) {
    try {
        require('dotenv').config();
    } catch (e) {
        // dotenv might not be available in all environments, ignore
    }
}

/**
 * Prisma client singleton for Next.js to prevent multiple instances during development.
 * Uses the Neon serverless HTTP adapter for optimal performance on Vercel.
 */
const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL || process.env.DIRECT_URL

    if (!connectionString) {
        // In local/build environments without DB URL, we return a basic client
        // with a dummy URL to satisfy Prisma 7's requirement for a non-empty datasource.
        return new PrismaClient({
            datasources: {
                db: {
                    url: "postgresql://dummy:dummy@localhost:5432/dummy"
                }
            }
        } as any)
    }

    // Use HTTP connection instead of WebSockets for better stability in serverless environments
    const sql = neon(connectionString)
    const adapter = new PrismaNeon(sql as any)
    return new PrismaClient({ adapter } as any)
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export default prisma
