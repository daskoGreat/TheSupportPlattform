import { PrismaClient } from '@prisma/client'
import { neon } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'

/**
 * Prisma client singleton for Next.js to prevent multiple instances during development.
 * Uses the Neon serverless HTTP adapter for optimal performance on Vercel.
 */
const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL

    if (!connectionString) {
        // Provide a default instance during build time if env is missing
        return new PrismaClient()
    }

    // Use HTTP connection instead of WebSockets for better stability in serverless environments
    const sql = neon(connectionString)
    const adapter = new PrismaNeon(sql as any)
    return new PrismaClient({ adapter } as any)
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export { prisma }
export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
