"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { Heart, MessageCircle, Users, BookOpen, Calendar, Clock, Bookmark } from 'lucide-react';
import styles from './SupportHub.module.css';
import { SkeletonBlock } from './Skeleton';

interface SupportHubProps {
    userName: string;
}

export default function SupportHub({ userName }: SupportHubProps) {
    const { t } = useTranslation('hub');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Subtle delay to show premium loading state as requested
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const moodOptions = [
        { key: 'calm', icon: '😌' },
        { key: 'stressed', icon: '😫' },
        { key: 'sad', icon: '😔' },
        { key: 'overwhelmed', icon: '🤯' },
        { key: 'talk', icon: '💭' }
    ];

    const supportCards = [
        {
            key: 'coach',
            icon: <Heart className={styles.cardIcon} size={32} />,
            path: '/coaches'
        },
        {
            key: 'luna',
            icon: <MessageCircle className={styles.cardIcon} size={32} />,
            path: '/chat'
        },
        {
            key: 'community',
            icon: <Users className={styles.cardIcon} size={32} />,
            path: '/community'
        },
        {
            key: 'resources',
            icon: <BookOpen className={styles.cardIcon} size={32} />,
            path: '/resources'
        }
    ];

    if (isLoading) {
        return (
            <div className={styles.hubContainer}>
                <header className={styles.welcomeSection}>
                    <SkeletonBlock height={48} width={400} />
                    <SkeletonBlock height={24} width={500} style={{ marginTop: 12 }} />
                </header>
                <div className={styles.checkinSection}>
                    <SkeletonBlock height={20} width={200} />
                    <div className={styles.moodGroup} style={{ marginTop: 12 }}>
                        {[1, 2, 3, 4, 5].map(i => <SkeletonBlock key={i} height={40} width={100} radius={20} />)}
                    </div>
                </div>
                <div className={styles.supportGrid}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={styles.supportCard} style={{ minHeight: 220 }}>
                            <SkeletonBlock height={32} width={32} />
                            <SkeletonBlock height={24} width="60%" />
                            <SkeletonBlock height={60} width="100%" />
                            <SkeletonBlock height={40} width="100%" radius={8} style={{ marginTop: 'auto' }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.hubContainer}>
            {/* Welcome Section */}
            <header className={styles.welcomeSection}>
                <h1 className={styles.welcomeTitle}>
                    {t('welcomeBack', { name: userName })}
                </h1>
                <p className={styles.welcomeSubtitle}>
                    {t('supportIntro')}
                </p>
            </header>

            {/* Emotional Check-in */}
            <section className={styles.checkinSection}>
                <h3 className={styles.checkinTitle}>{t('checkin.title')}</h3>
                <div className={styles.moodGroup}>
                    {moodOptions.map((mood) => (
                        <button key={mood.key} className={styles.moodBtn}>
                            <span>{mood.icon}</span> {t(`checkin.options.${mood.key}`)}
                        </button>
                    ))}
                </div>
            </section>

            {/* Support Grid */}
            <div className={styles.supportGrid}>
                {supportCards.map((card) => (
                    <div key={card.key} className={styles.supportCard}>
                        {card.icon}
                        <h4 className={styles.cardTitle}>{t(`cards.${card.key}.title`)}</h4>
                        <p className={styles.cardDesc}>{t(`cards.${card.key}.description`)}</p>
                        <Link href={card.path} className={styles.cardBtn}>
                            {t(`cards.${card.key}.cta`)}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Support Journey */}
            <section className={styles.journeySection}>
                <h3 className={styles.journeyTitle}>{t('journey.title')}</h3>
                <div className={styles.journeyGrid}>
                    <div className={styles.journeyCard}>
                        <div className={styles.journeyIcon}>
                            <Clock size={20} />
                        </div>
                        <div className={styles.journeyContent}>
                            <h5>{t('journey.recentChat.title')}</h5>
                            <p>{t('journey.recentChat.description')}</p>
                        </div>
                    </div>
                    <div className={styles.journeyCard}>
                        <div className={styles.journeyIcon}>
                            <Calendar size={20} />
                        </div>
                        <div className={styles.journeyContent}>
                            <h5>{t('journey.upcomingSession.title')}</h5>
                            <p>{t('journey.upcomingSession.description', { coachName: 'Sarah Miller' })}</p>
                        </div>
                    </div>
                    <div className={styles.journeyCard}>
                        <div className={styles.journeyIcon}>
                            <Bookmark size={20} />
                        </div>
                        <div className={styles.journeyContent}>
                            <h5>{t('journey.savedCoaches.title')}</h5>
                            <p>{t('journey.savedCoaches.description')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
