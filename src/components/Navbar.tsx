import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useTranslation } from '@/i18n/client';

export default function Navbar() {
    const pathname = usePathname();
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
                <Link href="/" className={styles.logo}>
                    <img src="/branding/heart.png" alt="Logo" className={styles.logoIcon} />
                    <span className={styles.logoText}>The Support Network</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`${styles.links} ${isMenuOpen ? styles.mobileOpen : ''}`}>
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
                        <Link href="/signin" className={styles.signinBtn} onClick={() => setIsMenuOpen(false)}>
                            {t('nav.signIn')}
                        </Link>
                    </div>
                </div>

                <div className={styles.actions}>
                    <Link href="/signin" className={styles.signinBtn}>
                        {t('nav.signIn')}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
