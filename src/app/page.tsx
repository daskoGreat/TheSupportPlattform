import Link from 'next/link';
import styles from './page.module.css';
import { getServerT } from '@/i18n/server';

export default async function Home() {
    const tHome = await getServerT() as (key: string) => string;
    return (
        <div className="page-content">
            <div className={`${styles.hero} container`}>
                <div className={styles.heroLayout}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            {tHome("home:welcomeBadge") || "A safe space for you"}
                        </div>
                        <h1 className={styles.heroTitle}>{tHome("home:title")}</h1>
                        <p className={styles.heroSubtitle}>
                            {tHome("home:subtitle")}
                        </p>

                        <div className={styles.ctaGroup}>
                            <Link href="/register" className={styles.primaryBtn}>
                                {tHome("home:join")}
                            </Link>
                            <Link href="/signin" className={styles.secondaryBtn}>
                                {tHome("home:signIn")}
                            </Link>
                        </div>

                        <p className={styles.heroFooter}>
                            {tHome("home:alreadyMember")} <Link href="/signin" className="accent-blue">{tHome("home:signIn")}</Link>
                        </p>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.visualContainer}>
                            <img src="/branding/heart.png" className={styles.heroHeart} alt="Support Network" />
                            <div className={styles.visualAura}></div>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.trustSection}>
                <div className="container">
                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}>🛡️</div>
                            <h4>Safe & Private</h4>
                            <p>Your privacy is our priority. Every conversation is secure.</p>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}>🤝</div>
                            <h4>Human Connection</h4>
                            <p>Talk to real people who care about your journey.</p>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustIcon}>🌱</div>
                            <h4>Room to Grow</h4>
                            <p>Find the resources you need at your own pace.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
