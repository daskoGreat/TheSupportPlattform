import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

async function main() {
    const url = process.env.DATABASE_URL;
    let prisma: PrismaClient;

    if (url?.startsWith("prisma+postgres://")) {
        prisma = new PrismaClient({ accelerateUrl: url });
    } else {
        const pool = new Pool({ connectionString: url });
        const adapter = new PrismaPg(pool);
        prisma = new PrismaClient({ adapter });
    }

    try {
        const users = await prisma.user.findMany({
            select: {
                email: true,
                role: true,
                password: true
            }
        });

        console.log("Database Users:");
        users.forEach(u => {
            console.log(`- Email: ${u.email}, Role: ${u.role}, HasPassword: ${!!u.password}`);
        });
    } catch (e) {
        console.error("Error fetching users:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
