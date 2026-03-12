import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL
    console.log("[Prisma] Initializing with URL:", connectionString ? "found (starts with " + connectionString.substring(0, 10) + "..." : "NOT FOUND")

    if (!connectionString) {
        throw new Error("DATABASE_URL is not defined in environment variables")
    }

    const pool = new Pool({ connectionString })
    const adapter = new PrismaNeon(pool)
    return new PrismaClient({ adapter } as any)
}

declare global {
    var prismaInstance: undefined | PrismaClient
}

// Use a proxy to delay instantiation until the first property access.
// This prevents initialization errors during the Next.js build-time 
// module evaluation phase.
const prisma = new Proxy({} as PrismaClient, {
    get: (target, prop) => {
        if (!globalThis.prismaInstance) {
            globalThis.prismaInstance = prismaClientSingleton();
        }
        return (globalThis.prismaInstance as any)[prop];
    }
});

export { prisma };
export default prisma;
