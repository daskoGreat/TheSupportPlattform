'use client';

import { MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

interface CoachActionsProps {
    coachId: string;
    coachName: string;
    styles: any;
}

export default function CoachActions({ coachId, coachName, styles }: CoachActionsProps) {
    const handleChat = async () => {
        try {
            const res = await fetch('/api/conversations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ coachId: coachId })
            });
            if (res.ok) {
                const conv = await res.json();
                window.location.href = `/chat/${coachId}`;
            }
        } catch (error) {
            console.error("Failed to start conversation", error);
        }
    };

    return (
        <div className={styles.actionCard}>
            <button
                onClick={handleChat}
                className={styles.chatBtn}
                style={{ width: '100%', border: 'none', cursor: 'pointer' }}
            >
                <MessageCircle size={20} /> Chat with {coachName.split(' ')[0]}
            </button>
            <Link href={`/book/${coachId}`} className={styles.bookBtn}>
                <Calendar size={20} /> Book Video Session
            </Link>
            <p className={styles.pricingNote}>First session is always free.</p>
        </div>
    );
}
