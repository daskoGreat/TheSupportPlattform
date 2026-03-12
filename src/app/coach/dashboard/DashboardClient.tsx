"use client";

import { useState } from 'react';
import styles from './dashboard.module.css';
import { useRouter } from 'next/navigation';
import { useToast } from '@/context/ToastContext';
import { useT } from '@/i18n/client';
import { useLanguage } from '@/context/LanguageContext';

type Message = {
    id: string;
    senderId: string;
    content: string;
    createdAt: string;
};

type Conversation = {
    id: string;
    userId: string;
    userName: string;
    lastMessage: string;
    lastMessageAt: string;
    unreadCount: number;
    messages: Message[];
};

type Booking = {
    id: string;
    userId: string;
    userName: string;
    startTime: string;
    endTime: string;
    sessionType: string;
    status: string;
};

type SummaryStats = {
    unreadMessages: number;
    todayBookings: number;
    pendingRequests: number;
    upcomingBookings: number;
};

export default function DashboardClient({
    initialConversations,
    initialBookings,
    summaryStats,
    currentUserId
}: {
    initialConversations: Conversation[],
    initialBookings: Booking[],
    summaryStats: SummaryStats,
    currentUserId: string
}) {
    const router = useRouter();
    const { showToast } = useToast();
    const { locale } = useLanguage();
    const tCoach = useT("coach");
    const tCommon = useT("common");
    const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
    const [bookings, setBookings] = useState<Booking[]>(initialBookings);

    // UI State
    const [selectedConvoId, setSelectedConvoId] = useState<string | null>(null);
    const [replyText, setReplyText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [updatingBookingId, setUpdatingBookingId] = useState<string | null>(null);

    const intlLocale = locale === "sv" ? "sv-SE" : locale === "es" ? "es-ES" : "en-GB";

    const formatTime = (isoString: string) => {
        const d = new Date(isoString);
        return d.toLocaleTimeString(intlLocale, { hour: '2-digit', minute: '2-digit' });
    };

    const formatDate = (isoString: string) => {
        const d = new Date(isoString);
        return d.toLocaleDateString(intlLocale, { month: 'short', day: 'numeric' });
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!replyText.trim() || !selectedConvoId) return;

        setIsSending(true);
        try {
            const res = await fetch('/api/coach/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    conversationId: selectedConvoId,
                    content: replyText
                })
            });

            if (res.ok) {
                const newMessage = await res.json();

                // Update local state instantly
                setConversations(prev => prev.map(c => {
                    if (c.id === selectedConvoId) {
                        return {
                            ...c,
                            lastMessage: newMessage.content,
                            lastMessageAt: newMessage.createdAt,
                            unreadCount: 0,
                            messages: [...c.messages, newMessage]
                        };
                    }
                    return c;
                }));
                setReplyText("");
                showToast(tCommon("toast.messageSent"), "success");
            } else {
                showToast(tCommon("toast.actionFailed"), "error");
            }
        } catch (err) {
            console.error(err);
            showToast(tCommon("toast.actionFailed"), "error");
        } finally {
            setIsSending(false);
        }
    };

    const handleUpdateBooking = async (bookingId: string, newStatus: string) => {
        setUpdatingBookingId(bookingId);

        const previous = bookings;
        setBookings(prev => prev.map(b =>
            b.id === bookingId ? { ...b, status: newStatus } : b
        ));

        try {
            const res = await fetch(`/api/coach/bookings/${bookingId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });

            if (!res.ok) {
                setBookings(previous);
                showToast(tCommon("toast.actionFailed"), "error");
            } else {
                if (newStatus === "CONFIRMED") {
                    showToast(tCommon("toast.bookingAccepted"), "success");
                } else if (newStatus === "DECLINED") {
                    showToast(tCommon("toast.bookingDeclined"), "info");
                }
            }
        } catch (error) {
            console.error("Failed to update booking status", error);
            setBookings(previous);
            showToast(tCommon("toast.actionFailed"), "error");
        } finally {
            setUpdatingBookingId(null);
        }
    };

    const selectedConvo = conversations.find(c => c.id === selectedConvoId);

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);

    const pendingBookings = bookings.filter(b => b.status === "PENDING");
    const todayBookings = bookings.filter(b => {
        const d = new Date(b.startTime);
        return d >= todayStart && d < tomorrowStart && b.status === "CONFIRMED";
    });
    const upcomingBookings = bookings.filter(b => {
        const d = new Date(b.startTime);
        return d >= tomorrowStart && b.status === "CONFIRMED";
    });

    return (
        <div className={styles.dashboardContainer}>
            {/* Top Summary Row */}
            <div className={styles.summaryRow}>
                <div className={`${styles.summaryCard} ${summaryStats.unreadMessages > 0 ? styles.highlightCard : ''}`}>
                    <div className={styles.summaryValue}>{summaryStats.unreadMessages}</div>
                    <div className={styles.summaryLabel}>{tCoach("dashboard.summary.newMessages")}</div>
                </div>
                <div className={styles.summaryCard}>
                    <div className={styles.summaryValue}>{summaryStats.todayBookings}</div>
                    <div className={styles.summaryLabel}>{tCoach("dashboard.summary.todayBookings")}</div>
                </div>
                <div className={`${styles.summaryCard} ${summaryStats.pendingRequests > 0 ? styles.highlightCard : ''}`}>
                    <div className={styles.summaryValue}>{summaryStats.pendingRequests}</div>
                    <div className={styles.summaryLabel}>{tCoach("dashboard.summary.pendingRequests")}</div>
                </div>
                <div className={styles.summaryCard}>
                    <div className={styles.summaryValue}>{summaryStats.upcomingBookings}</div>
                    <div className={styles.summaryLabel}>{tCoach("dashboard.summary.upcoming")}</div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={styles.mainGrid}>

                {/* Left Column: Messages */}
                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h2>{tCoach("dashboard.messages")}</h2>
                        {selectedConvoId && (
                            <button className={styles.backButton} onClick={() => setSelectedConvoId(null)}>
                                &larr; {tCoach("dashboard.backToList")}
                            </button>
                        )}
                    </div>

                    {!selectedConvoId ? (
                        <div className={styles.panelContent}>
                            {conversations.length === 0 ? (
                                <div className={styles.emptyState}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path>
                                    </svg>
                                    <p>{tCoach("dashboard.emptyMessages")}</p>
                                </div>
                            ) : (
                                conversations.map(c => (
                                    <div
                                        key={c.id}
                                        className={`${styles.conversationItem} ${c.unreadCount > 0 ? styles.unread : ''}`}
                                        onClick={() => {
                                            setSelectedConvoId(c.id);
                                            // Mark as read locally if entering convo
                                            if (c.unreadCount > 0) {
                                                setConversations(prev => prev.map(p => p.id === c.id ? { ...p, unreadCount: 0 } : p));
                                            }
                                        }}
                                    >
                                        <div className={styles.convoHeader}>
                                            <span className={styles.convoName}>{c.userName}</span>
                                            <span className={styles.convoTime}>{formatTime(c.lastMessageAt)}</span>
                                        </div>
                                        <div className={`${styles.convoPreview} ${c.unreadCount > 0 ? styles.unreadText : ''}`}>
                                            {c.lastMessage || tCommon("empty.none")}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <div className={styles.chatThread}>
                            <div className={styles.chatMessages}>
                                {selectedConvo?.messages.map(m => {
                                    const isCoach = m.senderId === currentUserId;
                                    return (
                                        <div
                                            key={m.id}
                                            className={`${styles.messageBubble} ${isCoach ? styles.messageSent : styles.messageReceived}`}
                                        >
                                            <div>{m.content}</div>
                                            <div className={styles.messageTime}>{formatTime(m.createdAt)}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <form className={styles.chatInputArea} onSubmit={handleSendMessage}>
                                <input
                                    type="text"
                                    className={styles.chatInput}
                                    placeholder={tCoach("dashboard.replyPlaceholder")}
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    disabled={isSending}
                                />
                                <button
                                    type="submit"
                                    className={styles.sendButton}
                                    disabled={!replyText.trim() || isSending}
                                    aria-busy={isSending}
                                    aria-label={isSending ? tCommon("loading.sending") : tCoach("dashboard.reply")}
                                >
                                    {isSending ? <span className="spinner" aria-hidden="true" /> : tCoach("dashboard.reply")}
                                </button>
                            </form>
                        </div>
                    )}
                </div>

                {/* Right Column: Bookings */}
                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h2>{tCoach("dashboard.bookings")}</h2>
                    </div>
                    <div className={styles.panelContent}>

                        {/* Pending Requests */}
                        {pendingBookings.length > 0 && (
                            <>
                                <h3 className={styles.sectionTitle}>{tCoach("dashboard.pendingTitle")}</h3>
                                {pendingBookings.map(b => (
                                    <div key={b.id} className={`${styles.bookingCard} ${styles.pending}`}>
                                        <div className={styles.bookingHeader}>
                                            <span className={styles.bookingUser}>{b.userName}</span>
                                            <span className={`${styles.badge} ${styles.badgePending}`}>{tCoach("dashboard.status.pending")}</span>
                                        </div>
                                        <div className={styles.bookingType}>
                                            {b.sessionType}
                                        </div>
                                        <div className={styles.bookingTime}>
                                            <span>📅 {formatDate(b.startTime)}</span>
                                            <span>🕒 {formatTime(b.startTime)} - {formatTime(b.endTime)}</span>
                                        </div>
                                        <div className={styles.bookingActions}>
                                            <button
                                                className={styles.btnPrimary}
                                                onClick={() => handleUpdateBooking(b.id, "CONFIRMED")}
                                                disabled={updatingBookingId === b.id}
                                                aria-busy={updatingBookingId === b.id}
                                            >
                                                {updatingBookingId === b.id && (
                                                    <span className="spinner" style={{ marginRight: 6 }} aria-hidden="true" />
                                                )}
                                                {tCoach("dashboard.accept")}
                                            </button>
                                            <button
                                                className={styles.btnSecondary}
                                                onClick={() => handleUpdateBooking(b.id, "DECLINED")}
                                                disabled={updatingBookingId === b.id}
                                            >
                                                {tCoach("dashboard.decline")}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                        {/* Today's Sessions */}
                        {todayBookings.length > 0 && (
                            <>
                                <h3 className={styles.sectionTitle}>{tCoach("dashboard.todayTitle")}</h3>
                                {todayBookings.map(b => (
                                    <div key={b.id} className={styles.bookingCard}>
                                        <div className={styles.bookingHeader}>
                                            <span className={styles.bookingUser}>{b.userName}</span>
                                            <span className={`${styles.badge} ${styles.badgeConfirmed}`}>{tCoach("dashboard.status.confirmed")}</span>
                                        </div>
                                        <div className={styles.bookingType}>{b.sessionType}</div>
                                        <div className={styles.bookingTime}>
                                            <span>
                                                🕒 {formatTime(b.startTime)} - {formatTime(b.endTime)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                        {/* Upcoming Sessions */}
                        {upcomingBookings.length > 0 && (
                            <>
                                <h3 className={styles.sectionTitle}>{tCoach("dashboard.upcomingTitle")}</h3>
                                {upcomingBookings.map(b => (
                                    <div key={b.id} className={styles.bookingCard}>
                                        <div className={styles.bookingHeader}>
                                            <span className={styles.bookingUser}>{b.userName}</span>
                                            <span className={`${styles.badge} ${styles.badgeConfirmed}`}>{tCoach("dashboard.status.confirmed")}</span>
                                        </div>
                                        <div className={styles.bookingType}>{b.sessionType}</div>
                                        <div className={styles.bookingTime}>
                                            <span>📅 {formatDate(b.startTime)}</span>
                                            <span>🕒 {formatTime(b.startTime)} - {formatTime(b.endTime)}</span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                        {bookings.length === 0 && (
                            <div className={styles.emptyState}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <p>{tCoach("dashboard.emptyBookings")}</p>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
}
