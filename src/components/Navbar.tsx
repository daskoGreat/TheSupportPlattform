"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useTranslation } from '@/i18n/client';
import LanguageSwitcher from './LanguageSwitcher';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const isAuthenticated = !!session;
    const { t } = useTranslation('common');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'nav.home' },
        { path: '/coaches', label: 'nav.coaches' },
        { path: '/community', label: 'nav.community' },
        { path: '/resources', label: 'nav.resources' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.mainNav}>
                    <Link href="/" className={styles.logo}>
                        <img src="/branding/heart.png" alt="Logo" className={styles.logoIcon} />
                        <span className={styles.logoText}>The Support Network</span>
                    </Link>

                    <div className={styles.desktopLinks}>
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
                </div>

                <div className={styles.actions}>
                    <LanguageSwitcher />
                    {!isAuthenticated ? (
                        <Link href="/signin" className={styles.signinBtn}>
                            {t('nav.signIn')}
                        </Link>
                    ) : (
                        <button
                            onClick={() => signOut()}
                            className={styles.signinBtn}
                            title={t('nav.signOut') || "Sign Out"}
                        >
                            {t('nav.signOut') || "Sign Out"}
                        </button>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Drawer */}
                <div className={`${styles.mobileLinks} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.link} ${pathname === item.path ? styles.active : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t(item.label)}
                        </Link>
                    ))}
                    <div className={styles.mobileActions}>
                        <LanguageSwitcher />
                        {!isAuthenticated ? (
                            <Link href="/signin" className={styles.signinBtn} onClick={() => setIsMenuOpen(false)}>
                                {t('nav.signIn')}
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    signOut();
                                    setIsMenuOpen(false);
                                }}
                                className={styles.signinBtn}
                            >
                                {t('nav.signOut') || "Sign Out"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
