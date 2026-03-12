'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './auth.module.css';
import { useT } from '@/i18n/client';

export default function SignIn() {
    const tAuth = useT('auth');
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
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError(tAuth('signIn.errorInvalid'));
                return;
            }

            // Fetch session to determine role-based redirect
            const res = await fetch('/api/auth/session');
            if (res.ok) {
                const session = await res.json();
                const role = session?.user?.role;

                if (role === 'COACH') {
                    router.push('/coach/dashboard');
                } else if (role === 'ADMIN') {
                    router.push('/admin');
                } else {
                    router.push('/intake');
                }
            } else {
                router.push('/intake');
            }
        } catch (err) {
            setError(tAuth('signIn.errorGeneric'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.topRight}`} alt="" />
            <img src="/branding/corner.png" className={`${styles.corner} ${styles.bottomLeft}`} alt="" />

            <div className={styles.authCard}>
                <img src="/branding/heart.png" className={styles.miniHeart} alt="" />
                <h1>{tAuth('signIn.title')}</h1>
                <p className={styles.subtitle}>{tAuth('signIn.subtitle')}</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder={tAuth('signIn.email')}
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder={tAuth('signIn.password')}
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className={styles.errorMessage}>{error}</p>}

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isLoading}
                        aria-busy={isLoading}
                        aria-live="polite"
                    >
                        {isLoading && <span className="spinner" style={{ marginRight: 8 }} aria-hidden="true" />}
                        {isLoading ? tAuth('signIn.buttonLoading') : tAuth('signIn.button')}
                    </button>
                </form>

                <div className={styles.footerLinks}>
                    {tAuth('signIn.noAccount')} <Link href="/register">{tAuth('signIn.joinNow')}</Link>
                    <br />
                    <Link href="/" className={styles.backLink}>{tAuth('signIn.backHome')}</Link>
                </div>
            </div>
        </div>
    );
}
