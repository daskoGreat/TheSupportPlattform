import styles from './Coaches.module.css';
import { SAMPLE_COACHES } from '@/lib/data/sample-coaches';
import { getServerT } from '@/i18n/server';
import Link from 'next/link';

export default async function CoachesPage() {
    const t = await getServerT();
    return (
        <div className="page-content">
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                        {t("common:pages.coaches.title")}
                    </h1>
                    <p className="text-soft" style={{ fontSize: '1.2rem' }}>
                        {t("common:pages.coaches.subtitle")}
                    </p>
                </div>

                <div className={styles.grid}>
                    {SAMPLE_COACHES.map(coach => (
                        <Link key={coach.id} href={`/coaches/${coach.id}`} className={`support-card ${styles.coachCard}`}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={coach.imageUrl}
                                    alt={coach.name}
                                    className={styles.image}
                                />
                                <div className={styles.badge}>{coach.expertise[0]}</div>
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.name}>{coach.name}</h3>
                                <p className={styles.title}>{coach.title}</p>
                                <p className={styles.intro}>{coach.shortIntro}</p>

                                <div className={styles.tags}>
                                    {coach.expertise.slice(0, 3).map(tag => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.footer}>
                                    <span className={styles.viewLink}>{t("common:actions.viewProfile")}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
