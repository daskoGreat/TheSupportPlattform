import styles from './community.module.css';

export function CommunitySkeleton() {
    return (
        <div className={`support-card ${styles.communityCard} skeleton`}>
            <div className={styles.cardHeader}>
                <div className={styles.iconBox} style={{ background: 'var(--bg-dark)' }}></div>
                <div style={{ height: '14px', width: '40px', background: 'var(--bg-dark)', borderRadius: '4px' }}></div>
            </div>
            <div style={{ height: '20px', width: '70%', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '12px' }}></div>
            <div style={{ height: '14px', width: '90%', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '8px' }}></div>
            <div style={{ height: '14px', width: '80%', background: 'var(--bg-dark)', borderRadius: '4px', marginBottom: '24px' }}></div>
            <div className={styles.cardFooter}>
                <div style={{ height: '14px', width: '60px', background: 'var(--bg-dark)', borderRadius: '4px' }}></div>
                <div style={{ height: '28px', width: '80px', background: 'var(--bg-dark)', borderRadius: '14px' }}></div>
            </div>
        </div>
    );
}

export function CommunityGridSkeleton() {
    return (
        <div className={styles.grid}>
            {[1, 2, 3, 4].map(i => (
                <CommunitySkeleton key={i} />
            ))}
        </div>
    );
}
