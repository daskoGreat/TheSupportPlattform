import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

const prismaClientSingleton = () => {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    const adapter = new PrismaNeon(pool)
    return new PrismaClient({ adapter })
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
