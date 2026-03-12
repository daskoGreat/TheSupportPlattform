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
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-md">
                        <button onClick={() => router.back()} className={styles.backBtn}><ArrowLeft size={20} /></button>
                        <h1 className={styles.logo}>{tCommunity("title")}</h1>
                    </div>
                    <div className={styles.searchBar}>
                        <Search size={18} />
                        <input type="text" placeholder={tCommunity("searchPlaceholder")} />
                    </div>
                </div>
            </header>

            <main className="container section-padding">
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h2>{tCommunity("heroTitle")}</h2>
                        <p>{tCommunity("heroBody")}</p>
                    </div>
                </section>

                <div className={styles.layout}>
                    <div className={styles.mainContent}>
                        <h3>{tCommunity("popular")}</h3>
                        <div className={styles.grid}>
                            {MOCK_COMMUNITIES.map(comm => (
                                <div key={comm.id} className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.iconBox}><Users size={24} /></div>
                                        <span className={styles.memberCount}>{comm.members}</span>
                                    </div>
                                    <h4>{comm.title}</h4>
                                    <p>{comm.description}</p>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.activity}><TrendingUp size={14} /> {comm.activity}</span>
                                        <button className={styles.joinBtn}>{tCommunity("join")}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.sideCard}>
                            <h4>{tCommunity("newDiscussions")}</h4>
                            <ul className={styles.list}>
                                <li>
                                    <MessageSquare size={14} />
                                    <div>
                                        <p>{tCommunity("discussion1")}</p>
                                        <span>{tCommunity("discussion1Meta")}</span>
                                    </div>
                                </li>
                                <li>
                                    <MessageSquare size={14} />
                                    <div>
                                        <p>{tCommunity("discussion2")}</p>
                                        <span>{tCommunity("discussion2Meta")}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.sideCardBranded}>
                            <img src="/branding/heart.png" alt="" />
                            <h4>{tCommunity("needHelpTitle")}</h4>
                            <p>{tCommunity("needHelpBody")}</p>
                            <Link href="/intake" className={styles.cta}>{tCommunity("findCoach")}</Link>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
