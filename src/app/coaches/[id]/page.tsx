import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Calendar, Star, ShieldCheck, Globe, Award, Briefcase } from 'lucide-react';
import { getServerT } from '@/i18n/server';
import styles from './CoachProfile.module.css';

interface CoachProfilePageProps {
    params: { id: string };
}

export default async function CoachProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const t = await getServerT();

    // The ID in the URL is the USER ID (linked to the coach profile)
    const coach = await prisma.user.findUnique({
        where: { id: id },
        include: {
            coachProfile: {
                include: {
                    availability: true
                }
            }
        }
    });

    if (!coach || !coach.coachProfile) {
        notFound();
    }

    const profile = coach.coachProfile;

    return (
        <div className="page-content">
            <div className="container section-padding">
                <Link href="/coaches" className={styles.backBtn}>
                    <ArrowLeft size={18} /> Back to Coaches
                </Link>

                <div className={styles.profileLayout}>
                    <aside className={styles.profileSidebar}>
                        <div className={styles.imageCard}>
                            <img
                                src={coach.image || '/avatars/default-coach.png'}
                                alt={coach.name || ''}
                                className={styles.profileImage}
                            />
                            <div className={styles.ratingBadge}>
                                <Star size={16} fill="#F5A623" color="#F5A623" />
                                <span>5.0 (24 reviews)</span>
                            </div>
                        </div>

                        <div className={styles.actionCard}>
                            <button
                                onClick={async () => {
                                    const res = await fetch('/api/conversations', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ coachId: coach.id })
                                    });
                                    if (res.ok) {
                                        const conv = await res.json();
                                        window.location.href = `/chat/${coach.id}`;
                                    }
                                }}
                                className={styles.chatBtn}
                                style={{ width: '100%', border: 'none', cursor: 'pointer' }}
                            >
                                <MessageCircle size={20} /> Chat with {coach.name?.split(' ')[0]}
                            </button>
                            <Link href={`/book/${coach.id}`} className={styles.bookBtn}>
                                <Calendar size={20} /> Book Video Session
                            </Link>
                            <p className={styles.pricingNote}>First session is always free.</p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoItem}>
                                <Globe size={18} />
                                <div>
                                    <h5>Languages</h5>
                                    <p>{profile.languages.join(', ')}</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <Briefcase size={18} />
                                <div>
                                    <h5>Experience</h5>
                                    <p>{profile.yearsOfExperience} years</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <ShieldCheck size={18} />
                                <div>
                                    <h5>Verified</h5>
                                    <p>Background checked</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className={styles.profileMain}>
                        <div className={styles.header}>
                            <h1 className={styles.name}>{coach.name}</h1>
                            <p className={styles.title}>{profile.title}</p>
                            <div className={styles.specialties}>
                                {profile.expertise.map(tag => (
                                    <span key={tag} className={styles.specialtyTag}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>About Me</h3>
                            <p className={styles.bio}>{profile.longBio}</p>
                        </section>

                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>My Approach</h3>
                            <p className={styles.bio}>
                                I believe that everyone has the inner strength to navigate life's challenges. My role is to provide the tools, perspective, and supportive space needed to unlock that resilience. We'll work together at your pace, focusing on practical strategies that make a real difference in your daily wellbeing.
                            </p>
                        </section>

                        <div className={styles.quoteCard}>
                            <Award size={32} className={styles.quoteIcon} />
                            <p className={styles.quoteText}>"{profile.shortIntro}"</p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
