"use client";

import Link from 'next/link';
import styles from '@/app/page.module.css';
import { useTranslation } from '@/i18n/client';

export default function LandingPage() {
    const { t } = useTranslation('home');

    return (
        <div className="page-content">
            <div className={`${styles.hero} container`}>
                <div className={styles.heroLayout}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            {t("welcomeBadge")}
                        </div>
                        <h1 className={styles.heroTitle}>{t("title")}</h1>
                        <p className={styles.heroSubtitle}>
                            {t("subtitle")}
                        </p>

                        <div className={styles.ctaGroup}>
                            <Link href="/register" className={styles.primaryBtn}>
                                {t("join")}
                            </Link>
                            <Link href="/signin" className={styles.secondaryBtn}>
                                {t("signIn")}
                            </Link>
                        </div>

                        <p className={styles.heroFooter}>
                            {t("alreadyMember")} <Link href="/signin" className="accent-blue">{t("signIn")}</Link>
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
