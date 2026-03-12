import styles from './Coaches.module.css';

export function CoachSkeleton() {
    return (
        <div className={`support-card ${styles.coachCard} skeleton`}>
            <div className={styles.imageWrapper} style={{ background: 'var(--bg-secondary)' }}></div>
            <div className={styles.info}>
                <div style={{ height: '24px', width: '60%', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '8px' }}></div>
                <div style={{ height: '16px', width: '40%', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '16px' }}></div>
                <div style={{ height: '14px', width: '90%', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '8px' }}></div>
                <div style={{ height: '14px', width: '80%', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '24px' }}></div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ height: '20px', width: '60px', background: 'var(--bg-dark)', borderRadius: '8px' }}></div>
                    <div style={{ height: '20px', width: '60px', background: 'var(--bg-dark)', borderRadius: '8px' }}></div>
                </div>
            </div>
        </div>
    );
}

export function CoachesGridSkeleton() {
    return (
        <div className={styles.grid}>
            {[1, 2, 3, 4, 5, 6].map(i => (
                <CoachSkeleton key={i} />
            ))}
        </div>
    );
}
