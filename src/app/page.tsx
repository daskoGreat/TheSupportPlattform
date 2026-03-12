import Link from 'next/link';
import styles from './page.module.css';
import { getServerT } from '@/i18n/server';

export default async function Home() {
    const tHome = await getServerT() as (key: string) => string;
    return (
        <div className={styles.wrapper}>
            {/* Decorative Floral Corners */}
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.topLeft}`} alt="" />
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.topRight}`} alt="" />
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.bottomLeft}`} alt="" />
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.bottomRight}`} alt="" />

            <main className={styles.main}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{tHome("home:title")}</h1>

                    <Link href="/register" className={styles.joinLink}>
                        {tHome("home:join")}
                    </Link>

                    <div className={styles.heartContainer}>
                        <img src="/branding/heart.png" className={styles.heart} alt="Support Network Heart" />
                    </div>

                    <div className={styles.loginSection}>
                        <p className={styles.alreadyMember}>{tHome("home:alreadyMember")}</p>
                        <Link href="/signin" className={styles.signinBtn}>
                            {tHome("home:signIn")}
                        </Link>
                    </div>
                </div>
            </main>

            <div className={styles.footerBranding}>
                N
            </div>
        </div>
    );
}
