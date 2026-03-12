import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";
import { isCoachProfileComplete } from "@/lib/coachProfile";
import styles from "./dashboard.module.css";
import CoachAvatarBubble from "./CoachAvatarBubble";
import { getServerT } from "@/i18n/server";

export default async function CoachDashboardPage() {
    const t = await getServerT();
    const session = await auth();

    if (!session?.user?.id) {
        redirect("/signin");
    }
    const userId = session.user.id;

    if ((session.user as any).role !== "COACH") {
        redirect("/"); // unauthorized for non-coaches
    }

    const coachUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, image: true },
    });

    const coachProfile = await prisma.coachProfile.findUnique({
        where: { userId: userId }
    });

    const profileComplete = isCoachProfileComplete(coachUser, coachProfile);
    if (!profileComplete) {
        redirect("/coach/profile");
    }

    const actualCoachId = coachProfile ? coachProfile.id : userId;

    const conversations = await prisma.conversation.findMany({
        where: {
            participants: {
                some: {
                    userId: userId
                }
            }
        },
        include: {
            participants: true,
            messages: {
                orderBy: { createdAt: "asc" },
            }
        },
        orderBy: {
            updatedAt: "desc"
        }
    });

    const userIdsToFetch = new Set<string>();
    conversations.forEach(c => {
        c.participants.forEach(p => userIdsToFetch.add(p.userId));
    });

    const users = await prisma.user.findMany({
        where: { id: { in: Array.from(userIdsToFetch) } },
        select: { id: true, name: true, image: true, role: true }
    });
    const userMap = new Map(users.map(u => [u.id, u]));

    const formattedConversations = conversations.map(c => {
        const otherParticipantId = c.participants.find(p => p.userId !== userId)?.userId;
        const otherParticipant = otherParticipantId ? userMap.get(otherParticipantId) : null;
        const lastMessage = c.messages.length > 0 ? c.messages[c.messages.length - 1] : null;

        const isUnread = lastMessage && lastMessage.senderId !== userId;

        return {
            id: c.id,
            userId: otherParticipant?.id || "unknown",
            userName: otherParticipant?.name || t("common:labels.unknownUser"),
            lastMessage: lastMessage?.content || "",
            lastMessageAt: lastMessage ? lastMessage.createdAt.toISOString() : c.updatedAt.toISOString(),
            unreadCount: isUnread ? 1 : 0,
            messages: c.messages.map(m => ({
                id: m.id,
                senderId: m.senderId,
                content: m.content,
                createdAt: m.createdAt.toISOString(),
            }))
        };
    });

    const bookings = await prisma.booking.findMany({
        where: {
            coachId: actualCoachId
        },
        include: {
            user: {
                select: { name: true }
            }
        },
        orderBy: {
            startTime: "asc"
        }
    });

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);

    const formattedBookings = bookings.map(b => ({
        id: b.id,
        userId: b.userId,
        userName: b.user?.name || t("common:labels.unknownUser"),
        startTime: b.startTime.toISOString(),
        endTime: b.endTime.toISOString(),
        sessionType: b.type === "VIDEO" ? t("bookings:book.video") : b.type === "PHONE" ? t("bookings:book.phone") : b.type,
        status: b.status
    }));

    const pendingRequests = formattedBookings.filter(b => b.status === "PENDING").length;
    const todayBookingsCount = formattedBookings.filter(b => {
        const d = new Date(b.startTime);
        return d >= todayStart && d < tomorrowStart && b.status === "CONFIRMED";
    }).length;

    const summaryStats = {
        unreadMessages: formattedConversations.filter(c => c.unreadCount > 0).length,
        todayBookings: todayBookingsCount,
        pendingRequests: pendingRequests,
        upcomingBookings: formattedBookings.filter(b => {
            const d = new Date(b.startTime);
            return d >= tomorrowStart && b.status === "CONFIRMED";
        }).length
    };

    return (
        <div className="container section-padding">
            <div className={styles.dashboardHeader}>
                <h1>{t("coach:dashboard.title")}</h1>
                <CoachAvatarBubble
                    name={coachUser?.name || "Coach"}
                    image={coachUser?.image || null}
                />
            </div>
            <DashboardClient
                initialConversations={formattedConversations}
                initialBookings={formattedBookings}
                summaryStats={summaryStats}
                currentUserId={session.user.id!}
            />
        </div>
    );
}

