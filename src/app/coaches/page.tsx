import styles from '../page.module.css';
import { SAMPLE_COACHES } from '@/lib/data/sample-coaches';
import { getServerT } from '@/i18n/server';

export default async function CoachesPage() {
    const t = await getServerT();
    return (
        <div className="container section-padding">
            <h1 className="text-center">{t("common:pages.coaches.title")}</h1>
            <p className="text-center" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-2xl)' }}>
                {t("common:pages.coaches.subtitle")}
            </p>

            <div className={styles.grid}>
                {SAMPLE_COACHES.map(coach => (
                    <div key={coach.id} className={styles.stepCard}>
                        <img
                            src={coach.imageUrl}
                            alt={coach.name}
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-md)' }}
                        />
                        <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{coach.name}</h3>
                        <p style={{ color: 'var(--accent-sage)', fontWeight: '600', fontSize: '0.9rem' }}>{coach.title}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{coach.shortIntro}</p>
                        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: 'var(--spacing-md)' }}>
                            {coach.expertise.slice(0, 3).map(tag => (
                                <span key={tag} style={{ background: 'var(--accent-sage-light)', color: 'var(--accent-sage)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
