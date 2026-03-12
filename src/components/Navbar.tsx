"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { useTranslation } from '@/i18n/client';

export default function Navbar() {
    const pathname = usePathname();
    const { t } = useTranslation('common');

    const navItems = [
        { name: 'Home', path: '/', label: 'nav:home' },
        { name: 'Coaches', path: '/coaches', label: 'nav:coaches' },
        { name: 'Community', path: '/community', label: 'nav:community' },
        { name: 'Resources', path: '/resources', label: 'nav:resources' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src="/branding/heart.png" alt="Logo" className={styles.logoIcon} />
                    <span className={styles.logoText}>The Support Network</span>
                </Link>

                <div className={styles.links}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
                        >
                            {t(item.label)}
                        </Link>
                    ))}
                </div>

                <div className={styles.actions}>
                    <Link href="/signin" className={styles.signinBtn}>
                        {t('nav:signIn')}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
