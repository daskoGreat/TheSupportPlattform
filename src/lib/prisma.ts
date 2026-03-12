import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

/**
 * Prisma client singleton for Next.js to prevent multiple instances during development.
 * Uses the Neon serverless adapter for stable database connectivity.
 */
const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL

    if (!connectionString) {
        // Provide a default instance during build time if env is missing
        return new PrismaClient()
    }

    const pool = new Pool({ connectionString })
    // Use 'as any' to bypass a type mismatch between @neondatabase/serverless Pool 
    // and the expected Pool type in @prisma/adapter-neon.
    const adapter = new PrismaNeon(pool as any)
    return new PrismaClient({ adapter } as any)
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export { prisma }
export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
