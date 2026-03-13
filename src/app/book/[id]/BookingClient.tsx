'use client';

import { useEffect, useState } from 'react';
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
    const [selectedSlot, setSelectedSlot] = useState<{ start: string; end: string } | null>(null);
    const [slots, setSlots] = useState<{ start: string; end: string }[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isConfirming, setIsConfirming] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let cancelled = false;
        const fetchSlots = async () => {
            setLoadingSlots(true);
            setError(null);
            try {
                const res = await fetch(`/api/coach/${coach.id}/availability`);
                const data = await res.json();
                if (!cancelled) {
                    setSlots(data.slots || []);
                }
            } catch (err) {
                console.error(err);
                if (!cancelled) {
                    setError("Could not load availability");
                }
            } finally {
                if (!cancelled) {
                    setLoadingSlots(false);
                }
            }
        };
        fetchSlots();
        return () => {
            cancelled = true;
        };
    }, [coach.id]);

    const formatSlotTime = (iso: string) => {
        const d = new Date(iso);
        return d.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatSlotDate = (iso: string) => {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
        });
    };

    const handleConfirm = async () => {
        if (!selectedSlot) return;

        setIsConfirming(true);
        try {
            const res = await fetch('/api/coach/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    coachId: coach.id,
                    start: selectedSlot.start,
                    end: selectedSlot.end,
                    type: sessionType,
                }),
            });

            if (res.ok) {
                setStep(2);
            } else {
                setError(tBook('errorBooking') || "Booking failed. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setError(tBook('errorBooking') || "An error occurred while booking.");
        }
        finally {
            setIsConfirming(false);
        }
    };

    if (step === 2) {
        return (
            <div className={styles.container}>
                <div className={styles.successCard}>
                    <div className={styles.successIconWrapper}>
                        <CheckCircle size={64} color="var(--accent-teal)" />
                    </div>
                    <h1 className={styles.successTitle}>
                        {tBook('successTitle') || "Session scheduled"}
                    </h1>
                    <p className={styles.successBody}>
                        {sessionType === "VIDEO"
                            ? (tBook('successBodyVideo', { name: coach.name }) ||
                                `Your video call with ${coach.name} has been confirmed.`)
                            : (tBook('successBodyPhone', { name: coach.name }) ||
                                `Your phone call with ${coach.name} has been confirmed.`)
                        }
                    </p>
                    <div className={styles.detailsBox}>
                        {selectedSlot && (
                            <>
                                <div className={styles.detailItem}>
                                    <Calendar size={18} />
                                    <span>{formatSlotDate(selectedSlot.start)}</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <Clock size={18} />
                                    <span>
                                        {formatSlotTime(selectedSlot.start)} -{" "}
                                        {formatSlotTime(selectedSlot.end)} (
                                        {Intl.DateTimeFormat().resolvedOptions().timeZone})
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                    <p className={styles.calendarNote}>
                        {tBook('calendarNote') || "An invite has been sent to your email."}
                    </p>
                    <div className={styles.successActions}>
                        <button onClick={() => router.push('/')} className={styles.primaryBtn}>
                            {tBook('returnToHub') || "Return to hub"}
                        </button>
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
                    <h1 className={styles.headerTitle}>
                        {tBook('pageTitle') || "Book a session"}
                    </h1>
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
                            <h3 className={styles.sectionTitle}>
                                {tBook('step1Title') || "1. Choose session type"}
                            </h3>
                            <div className={styles.typeGrid}>
                                <button
                                    onClick={() => setSessionType('VIDEO')}
                                    className={`${styles.typeBtn} ${sessionType === 'VIDEO' ? styles.active : ''}`}
                                >
                                    <Video size={24} />
                                    <div className={styles.typeText}>
                                        <p className={styles.typeTitle}>
                                            {tBook('typeVideoTitle') || "Video call"}
                                        </p>
                                        <p className={styles.typeSub}>
                                            {tBook('typeVideoSub') || "Face-to-face support from anywhere"}
                                        </p>
                                    </div>
                                </button>
                                <button
                                    onClick={() => setSessionType('PHONE')}
                                    className={`${styles.typeBtn} ${sessionType === 'PHONE' ? styles.active : ''}`}
                                >
                                    <Phone size={24} />
                                    <div className={styles.typeText}>
                                        <p className={styles.typeTitle}>
                                            {tBook('typePhoneTitle') || "Phone call"}
                                        </p>
                                        <p className={styles.typeSub}>
                                            {tBook('typePhoneSub') || "Voice-only for more privacy"}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>
                                {tBook('step2Title') || "2. Select a time"}
                            </h3>
                            <p className={styles.subtext}>
                                {tBook('slotsIntro') || "Available slots for the next days:"}
                            </p>
                            {loadingSlots && (
                                <div className={styles.timeGrid}>
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <div
                                            key={idx}
                                            className="skeleton"
                                            style={{ height: 40, borderRadius: 999 }}
                                        />
                                    ))}
                                </div>
                            )}
                            {!loadingSlots && error && (
                                <p className={styles.errorText}>{error}</p>
                            )}
                            {!loadingSlots && !error && slots.length === 0 && (
                                <p className={styles.emptyText}>
                                    {tBook('noSlots') || "No available slots right now. Please check back soon."}
                                </p>
                            )}
                            {!loadingSlots && !error && slots.length > 0 && (
                                <div className={styles.timeGrid}>
                                    {slots.map((slot) => (
                                        <button
                                            key={slot.start}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`${styles.timeBtn} ${
                                                selectedSlot?.start === slot.start ? styles.active : ""
                                            }`}
                                        >
                                            <span className={styles.timeDate}>
                                                {formatSlotDate(slot.start)}
                                            </span>
                                            <span className={styles.timeRange}>
                                                {formatSlotTime(slot.start)} –{" "}
                                                {formatSlotTime(slot.end)}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </section>

                        <footer className={styles.footer}>
                            <div className={styles.summaryFooter}>
                                {selectedSlot && (
                                    <p className={styles.selectionSummary}>
                                        {sessionType === 'VIDEO'
                                            ? (tBook('summaryVideoLabel') || "Video session")
                                            : (tBook('summaryPhoneLabel') || "Phone session")
                                        }{" "}
                                        {tBook('summaryAt') || "at"}{" "}
                                        {formatSlotTime(selectedSlot.start)}{" "}
                                        {tBook('summaryOn') || "on"}{" "}
                                        {formatSlotDate(selectedSlot.start)}
                                    </p>
                                )}
                                <button
                                    disabled={!selectedSlot || isConfirming}
                                    onClick={handleConfirm}
                                    className={styles.confirmBtn}
                                >
                                    {isConfirming && (
                                        <span
                                            className="spinner"
                                            style={{ marginRight: 8 }}
                                            aria-hidden="true"
                                        />
                                    )}
                                    {isConfirming
                                        ? (tBook('confirmingCta') || "Scheduling…")
                                        : (tBook('confirmCta') || "Confirm booking")}
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
