import "dotenv/config";
import { PrismaClient, Role } from "@prisma/client";
import * as bcrypt from "bcryptjs";

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const url = process.env.DATABASE_URL;
let prisma: PrismaClient;

if (url?.startsWith("prisma+postgres://")) {
    prisma = new PrismaClient({ accelerateUrl: url });
} else {
    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
}

async function main() {
    console.log("Starting database seed for The Support Network...");

    const adminPasswordHash = await bcrypt.hash("Admin123!", 10);
    const userPasswordHash = await bcrypt.hash("User123!", 10);
    const coachPasswordHash = await bcrypt.hash("Coach123!", 10);

    // Admin
    const admin = await prisma.user.upsert({
        where: { email: "admin@supportnetwork.local" },
        update: {},
        create: {
            email: "admin@supportnetwork.local",
            password: adminPasswordHash,
            name: "System Admin",
            role: Role.ADMIN,
        },
    });

    console.log(`Ensured admin account: ${admin.email}`);

    // Users
    const users = [];
    for (let i = 1; i <= 30; i++) {
        const email = `user${i}@supportnetwork.local`;
        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                password: userPasswordHash,
                name: `User ${i}`,
                role: Role.USER,
            },
        });
        users.push(user);
    }

    console.log(`Created or ensured ${users.length} users`);

    // Coaches and CoachProfiles
    const coachTitles = [
        "Stress & Burnout Specialist",
        "Life Transition Coach",
        "Anxiety & Mindfulness Coach",
        "Relationship & Communication Coach",
        "Career & Purpose Guide",
        "Resilience & Coping Coach",
        "Grief & Loss Support",
        "Self-Compassion Mentor",
        "Leadership & Boundaries Coach",
        "Wellbeing & Lifestyle Coach",
    ];

    const coachIntros = [
        "Helping high-achievers find balance and prevent burnout.",
        "Steady support through big life transitions and changes.",
        "Guiding you to manage anxiety with practical tools.",
        "Improving how you connect and communicate with others.",
        "Supporting you to find direction and meaning in your work.",
        "Building everyday resilience for stressful situations.",
        "Gentle space for processing grief, loss, and change.",
        "Helping you treat yourself with more kindness and care.",
        "Empowering you to set healthy and sustainable boundaries.",
        "Partnering with you to build a sustainable wellbeing routine.",
    ];

    const coachExpertise = [
        ["Burnout", "Stress", "Work-Life Balance"],
        ["Life Transitions", "Identity", "Change"],
        ["Anxiety", "Mindfulness", "Grounding"],
        ["Relationships", "Communication", "Conflict"],
        ["Career", "Purpose", "Values"],
        ["Resilience", "Coping Skills", "Overwhelm"],
        ["Grief", "Loss", "Adjustment"],
        ["Self-Compassion", "Inner Critic", "Shame"],
        ["Leadership", "Boundaries", "Assertiveness"],
        ["Wellbeing", "Habits", "Lifestyle"],
    ];

    const coachLanguages = [
        ["English"],
        ["English", "Swedish"],
        ["English"],
        ["English"],
        ["English", "Norwegian"],
        ["English"],
        ["English", "Swedish"],
        ["English"],
        ["English"],
        ["English", "Danish"],
    ];

    const coaches: { userId: string; profileId: string }[] = [];
    for (let i = 1; i <= 10; i++) {
        const email = `coach${i}@supportnetwork.local`;
        const coachUser = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                password: coachPasswordHash,
                name: `Coach ${i}`,
                role: Role.COACH,
            },
        });

        const profileIndex = i - 1;

        const profile = await prisma.coachProfile.upsert({
            where: { userId: coachUser.id },
            update: {
                title: coachTitles[profileIndex],
                shortIntro: coachIntros[profileIndex],
                longBio:
                    "I create a warm, practical, and non-judgmental space where you can explore what’s on your mind and get concrete support. Together we focus on small, sustainable steps that actually fit your life.",
                expertise: coachExpertise[profileIndex],
                languages: coachLanguages[profileIndex],
                yearsOfExperience: 3 + profileIndex,
                preferredModes: ["VIDEO", "PHONE"],
                isActive: true,
            },
            create: {
                userId: coachUser.id,
                title: coachTitles[profileIndex],
                shortIntro: coachIntros[profileIndex],
                longBio:
                    "I create a warm, practical, and non-judgmental space where you can explore what’s on your mind and get concrete support. Together we focus on small, sustainable steps that actually fit your life.",
                expertise: coachExpertise[profileIndex],
                languages: coachLanguages[profileIndex],
                yearsOfExperience: 3 + profileIndex,
                preferredModes: ["VIDEO", "PHONE"],
                isActive: true,
            },
        });

        coaches.push({ userId: coachUser.id, profileId: profile.id });
    }

    console.log(`Created or ensured ${coaches.length} coaches and coach profiles`);

    // Conversations and Messages
    const userMessages = [
        "Hi, I've been feeling really stressed lately.",
        "I’m finding it hard to switch off after work.",
        "I’ve been feeling anxious and overwhelmed most days.",
        "I’m struggling with boundaries and saying no.",
        "I feel stuck and unsure about my next step in life.",
    ];

    const coachMessages = [
        "Thanks for reaching out. Tell me a bit more about what’s going on.",
        "That sounds really difficult. When do you notice this the most?",
        "You’re not alone in feeling this way. What support have you had so far?",
        "We can definitely work on this together. What would you like to change first?",
        "Thank you for sharing that. How has this been affecting your day-to-day life?",
    ];

    let conversationsCreated = 0;
    let messagesCreated = 0;

    const conversationTarget = 50;

    for (let i = 0; i < conversationTarget; i++) {
        const user = users[i % users.length];
        const coach = coaches[i % coaches.length];

        const existingConversation = await prisma.conversation.findFirst({
            where: {
                AND: [
                    {
                        participants: {
                            some: {
                                userId: user.id,
                            },
                        },
                    },
                    {
                        participants: {
                            some: {
                                userId: coach.userId,
                            },
                        },
                    },
                ],
            },
            include: {
                participants: true,
            },
        });

        if (existingConversation) {
            continue;
        }

        const conversation = await prisma.conversation.create({
            data: {
                participants: {
                    create: [
                        { userId: user.id },
                        { userId: coach.userId },
                    ],
                },
            },
        });

        conversationsCreated += 1;

        const messageCount = 2 + (i % 3); // 2–4 messages
        const messageData = [];

        for (let m = 0; m < messageCount; m++) {
            const isUser = m % 2 === 0;
            const senderId = isUser ? user.id : coach.userId;
            const content = isUser
                ? userMessages[(i + m) % userMessages.length]
                : coachMessages[(i + m) % coachMessages.length];

            messageData.push({
                conversationId: conversation.id,
                senderId,
                content,
            });
        }

        if (messageData.length > 0) {
            const createdMessages = await prisma.message.createMany({
                data: messageData,
            });
            messagesCreated += createdMessages.count;
        }
    }

    console.log(
        `Created ${conversationsCreated} new conversations and ${messagesCreated} messages (existing conversations were left untouched)`
    );

    // Bookings
    // First, clear previous seed-generated bookings (identified by meetingLink prefix)
    const deletedSeedBookings = await prisma.booking.deleteMany({
        where: {
            meetingLink: {
                startsWith: "https://seed.supportnetwork.local/",
            },
        },
    });

    if (deletedSeedBookings.count > 0) {
        console.log(`Removed ${deletedSeedBookings.count} previously seeded bookings`);
    }

    const bookingTarget = 40;
    let bookingsCreated = 0;
    const now = new Date();

    for (let i = 0; i < bookingTarget; i++) {
        const user = users[i % users.length];
        const coach = coaches[i % coaches.length];

        const daysAhead = i % 7; // within next 7 days
        const start = new Date(now);
        start.setDate(start.getDate() + daysAhead);
        start.setHours(9 + (i % 8), 0, 0, 0); // between 09:00–16:00

        const end = new Date(start.getTime() + 45 * 60 * 1000); // 45 minutes

        const type = i % 2 === 0 ? "VIDEO" : "PHONE";
        const status = i % 3 === 0 ? "PENDING" : "CONFIRMED";

        await prisma.booking.create({
            data: {
                userId: user.id,
                coachId: coach.profileId,
                startTime: start,
                endTime: end,
                type,
                status,
                meetingLink: `https://seed.supportnetwork.local/booking-${i + 1}`,
            },
        });

        bookingsCreated += 1;
    }

    console.log(`Created ${bookingsCreated} upcoming bookings within the next 7 days`);
    console.log("Database seed for The Support Network completed successfully.");
}

main()
    .catch((e) => {
        console.error("Error while seeding database:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
