'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelection } from '@/context/SelectionContext';
import styles from './book.module.css';
import { ArrowLeft, Video, Phone, CheckCircle } from 'lucide-react';
import { useT } from '@/i18n/client';

export default function BookingPage() {
    const tBook = useT("bookings");
    const { selectedCoach } = useSelection();
    const [step, setStep] = useState(1);
    const [sessionType, setSessionType] = useState<'VIDEO' | 'PHONE'>('VIDEO');
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const router = useRouter();

    const times = ['09:00', '10:30', '13:00', '15:30', '17:00'];

    const handleConfirm = () => {
        setStep(3);
    };

    if (step === 3) {
        return (
            <div className={styles.container}>
                <div className={styles.successCard}>
                    <CheckCircle size={64} color="var(--color-success)" />
                    <h1>{tBook("book.successTitle")}</h1>
                    <p>
                        {tBook("book.successBody", {
                            type: sessionType === "VIDEO" ? tBook("book.video") : tBook("book.phone"),
                            name: selectedCoach?.name || "—",
                        })}
                    </p>
                    <div className={styles.details}>
                        <p><strong>{tBook("book.detailsTime")}:</strong> {tBook("book.tomorrowAt", { time: selectedTime || "" })}</p>
                        <p><strong>{tBook("book.detailsType")}:</strong> {sessionType === 'VIDEO' ? tBook("book.video") : tBook("book.phone")}</p>
                    </div>
                    <button onClick={() => router.push('/')} className={styles.primaryBtn}>{tBook("book.backHome")}</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className="container flex items-center gap-md">
                    <button onClick={() => router.back()} className={styles.backBtn}><ArrowLeft size={20} /></button>
                    <h1>{tBook("book.title", { name: selectedCoach?.name || "—" })}</h1>
                </div>
            </header>

            <div className="container section-padding">
                <div className={styles.card}>
                    <section className={styles.section}>
                        <h3>{tBook("book.step1")}</h3>
                        <div className={styles.typeGrid}>
                            <button
                                onClick={() => setSessionType('VIDEO')}
                                className={`${styles.typeBtn} ${sessionType === 'VIDEO' ? styles.active : ''}`}
                            >
                                <Video size={24} />
                                <div>
                                    <p className={styles.typeTitle}>{tBook("book.video")}</p>
                                    <p className={styles.typeSub}>{tBook("book.videoSub")}</p>
                                </div>
                            </button>
                            <button
                                onClick={() => setSessionType('PHONE')}
                                className={`${styles.typeBtn} ${sessionType === 'PHONE' ? styles.active : ''}`}
                            >
                                <Phone size={24} />
                                <div>
                                    <p className={styles.typeTitle}>{tBook("book.phone")}</p>
                                    <p className={styles.typeSub}>{tBook("book.phoneSub")}</p>
                                </div>
                            </button>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>{tBook("book.step2")}</h3>
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
                        <button
                            disabled={!selectedTime}
                            onClick={handleConfirm}
                            className={styles.confirmBtn}
                        >
                            {tBook("book.confirm")}
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
}
