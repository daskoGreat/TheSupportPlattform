'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './book.module.css';
import { ArrowLeft, Video, Phone, CheckCircle, Calendar, Clock } from 'lucide-react';
import { useT } from '@/i18n/client';

interface BookingClientProps {
    coach: any; // Ideally typed to User & { coachProfile: CoachProfile }
}

export default function BookingClient({ coach }: BookingClientProps) {
    const tBook = useT("bookings");
    const [step, setStep] = useState(1);
    const [sessionType, setSessionType] = useState<'VIDEO' | 'PHONE'>('VIDEO');
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const router = useRouter();

    const times = ['09:00', '10:30', '13:00', '15:30', '17:00'];

    const handleConfirm = async () => {
        if (!selectedTime) return;

        try {
            const res = await fetch('/api/coach/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    coachId: coach.id,
                    date: new Date().toISOString(), // In a real app, let user pick date
                    time: selectedTime,
                    type: sessionType === 'VIDEO' ? 'Video' : 'Phone'
                })
            });

            if (res.ok) {
                setStep(2);
            } else {
                alert("Booking failed. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while booking.");
        }
    };

    if (step === 2) {
        return (
            <div className={styles.container}>
                <div className={styles.successCard}>
                    <div className={styles.successIconWrapper}>
                        <CheckCircle size={64} color="var(--accent-teal)" />
                    </div>
                    <h1 className={styles.successTitle}>Session Scheduled!</h1>
                    <p className={styles.successBody}>
                        Your {sessionType === "VIDEO" ? 'Video Call' : 'Phone Call'} with <strong>{coach.name}</strong> has been confirmed.
                    </p>
                    <div className={styles.detailsBox}>
                        <div className={styles.detailItem}>
                            <Calendar size={18} />
                            <span>Tomorrow, {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Clock size={18} />
                            <span>{selectedTime} ({Intl.DateTimeFormat().resolvedOptions().timeZone})</span>
                        </div>
                    </div>
                    <p className={styles.calendarNote}>An invite has been sent to your email.</p>
                    <div className={styles.successActions}>
                        <button onClick={() => router.push('/')} className={styles.primaryBtn}>Return to Hub</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className="container flex items-center gap-md">
                    <button onClick={() => router.back()} className={styles.backBtn}><ArrowLeft size={20} /></button>
                    <h1 className={styles.headerTitle}>Book a Session</h1>
                </div>
            </header>

            <div className="container section-padding">
                <div className={styles.bookingLayout}>
                    <aside className={styles.coachSummary}>
                        <img src={coach.image || '/avatars/default-coach.png'} alt={coach.name} className={styles.miniAvatar} />
                        <div>
                            <h4 className={styles.miniName}>{coach.name}</h4>
                            <p className={styles.miniTitle}>{coach.coachProfile.title}</p>
                        </div>
                    </aside>

                    <div className={styles.card}>
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>1. Choose Session Type</h3>
                            <div className={styles.typeGrid}>
                                <button
                                    onClick={() => setSessionType('VIDEO')}
                                    className={`${styles.typeBtn} ${sessionType === 'VIDEO' ? styles.active : ''}`}
                                >
                                    <Video size={24} />
                                    <div className={styles.typeText}>
                                        <p className={styles.typeTitle}>Video Call</p>
                                        <p className={styles.typeSub}>Face-to-face support from anywhere</p>
                                    </div>
                                </button>
                                <button
                                    onClick={() => setSessionType('PHONE')}
                                    className={`${styles.typeBtn} ${sessionType === 'PHONE' ? styles.active : ''}`}
                                >
                                    <Phone size={24} />
                                    <div className={styles.typeText}>
                                        <p className={styles.typeTitle}>Phone Call</p>
                                        <p className={styles.typeSub}>Voice-only for more privacy</p>
                                    </div>
                                </button>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>2. Select a Time</h3>
                            <p className={styles.subtext}>Available slots for tomorrow:</p>
                            <div className={styles.timeGrid}>
                                {times.map(t => (
                                    <button
                                        key={t}
                                        onClick={() => setSelectedTime(t)}
                                        className={`${styles.timeBtn} ${selectedTime === t ? styles.active : ''}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </section>

                        <footer className={styles.footer}>
                            <div className={styles.summaryFooter}>
                                {selectedTime && (
                                    <p className={styles.selectionSummary}>
                                        {sessionType === 'VIDEO' ? 'Video' : 'Phone'} session at {selectedTime}
                                    </p>
                                )}
                                <button
                                    disabled={!selectedTime}
                                    onClick={handleConfirm}
                                    className={styles.confirmBtn}
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
