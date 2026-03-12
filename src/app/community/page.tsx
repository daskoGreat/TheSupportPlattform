'use client';

import styles from './community.module.css';
import { MOCK_COMMUNITIES } from '@/lib/matching/engine';
import { Users, Search, ArrowLeft, MessageSquare, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useT } from '@/i18n/client';

export default function CommunityPage() {
    const router = useRouter();
    const tCommunity = useT("community");

    return (
        <div className="page-content">
            <div className="container">
                <section style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                        {tCommunity("heroTitle")}
                    </h1>
                    <p className="text-soft" style={{ fontSize: '1.2rem' }}>
                        {tCommunity("heroBody")}
                    </p>
                </section>

                <div className={styles.layout}>
                    <div className={styles.mainContent}>
                        <h3 className={styles.sectionTitle}>{tCommunity("popular")}</h3>
                        <div className={styles.grid}>
                            {MOCK_COMMUNITIES.map(comm => (
                                <div key={comm.id} className={`support-card ${styles.communityCard}`}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.iconBox}><Users size={24} /></div>
                                        <span className={styles.memberCount}>{comm.members} {tCommunity("membersSuffix") || "members"}</span>
                                    </div>
                                    <h4 className={styles.cardTitle}>{comm.title}</h4>
                                    <p className={styles.cardDesc}>{comm.description}</p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.activity}><TrendingUp size={14} /> {comm.activity}</span>
                                        <button className={styles.joinBtn}>{tCommunity("explore") || "Explore"}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={`support-card ${styles.sideCard}`}>
                            <h4 className={styles.sideTitle}>{tCommunity("newDiscussions")}</h4>
                            <ul className={styles.list}>
                                <li>
                                    <MessageSquare size={16} className="accent-blue" />
                                    <div>
                                        <p className={styles.discussionText}>{tCommunity("discussion1")}</p>
                                        <span className={styles.discussionMeta}>{tCommunity("discussion1Meta")}</span>
                                    </div>
                                </li>
                                <li>
                                    <MessageSquare size={16} className="accent-blue" />
                                    <div>
                                        <p className={styles.discussionText}>{tCommunity("discussion2")}</p>
                                        <span className={styles.discussionMeta}>{tCommunity("discussion2Meta")}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className={`support-card ${styles.sideCardBranded}`}>
                            <div className={styles.brandIconWrapper}>
                                <img src="/branding/heart.png" alt="" className={styles.brandIcon} />
                            </div>
                            <h4 className={styles.sideTitle}>{tCommunity("needHelpTitle")}</h4>
                            <p className={styles.sideDesc}>{tCommunity("needHelpBody")}</p>
                            <Link href="/coaches" className={styles.cta}>{tCommunity("findCoach")}</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
