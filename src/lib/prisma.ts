import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient({
        datasource: {
            url: process.env.DATABASE_URL
        }
    } as any)
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
