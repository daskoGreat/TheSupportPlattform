'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './auth.module.css';
import { useT } from '@/i18n/client';

export default function Register() {
    const tAuth = useT('auth');
    const [role, setRole] = useState<'USER' | 'COACH'>('USER');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role }),
            });

            if (res.ok) {
                router.push('/signin');
            } else {
                setError(tAuth('register.errorGeneric'));
            }
        } catch (err) {
            setError(tAuth('signIn.errorGeneric'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.topLeft}`} alt="" />
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.bottomRight}`} alt="" />

            <div className={styles.authCard}>
                <img src="/branding/heart.png" className={styles.miniHeart} alt="" />
                <h1>{tAuth('register.title')}</h1>
                <p className={styles.subtitle}>{tAuth('register.subtitle')}</p>

                <div className={styles.roleSelector}>
                    <button
                        className={role === 'USER' ? styles.activeRole : ''}
                        onClick={() => setRole('USER')}
                    >
                        {tAuth('register.roleUser')}
                    </button>
                    <button
                        className={role === 'COACH' ? styles.activeRole : ''}
                        onClick={() => setRole('COACH')}
                    >
                        {tAuth('register.roleCoach')}
                    </button>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={tAuth('register.name')}
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder={tAuth('register.email')}
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder={tAuth('register.password')}
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {role === 'COACH' && (
                        <div className={styles.coachNote}>
                            <p>{tAuth('register.coachNote')}</p>
                        </div>
                    )}

                    {error && <p className={styles.errorMessage}>{error}</p>}

                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? tAuth('register.buttonLoading') : tAuth('register.button')}
                    </button>
                </form>

                <div className={styles.footerLinks}>
                    {tAuth('register.alreadyMember')} <Link href="/signin">{tAuth('register.signIn')}</Link>
                    <br />
                    <Link href="/" className={styles.backLink}>{tAuth('register.backHome')}</Link>
                </div>
            </div>
        </div>
    );
}
