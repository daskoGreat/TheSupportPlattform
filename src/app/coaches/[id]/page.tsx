'use client';

import { useRouter } from 'next/navigation';
import { useSelection } from '@/context/SelectionContext';
import { ArrowLeft, MessageCircle, Calendar, Star, ShieldCheck } from 'lucide-react';
import { useT } from '@/i18n/client';

export default function CoachProfile() {
    const tCoach = useT("coach");
    const { selectedCoach } = useSelection();
    const router = useRouter();

    if (!selectedCoach) {
        return (
            <div className="container section-padding text-center">
                <p>{tCoach("publicProfile.selectFirst")}</p>
                <button onClick={() => router.push('/intake')} className="primaryBtn">{tCoach("publicProfile.toMatching")}</button>
            </div>
        );
    }

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
            <header style={{ background: 'white', padding: 'var(--spacing-lg) 0', borderBottom: 'var(--border-soft)' }}>
                <div className="container flex items-center gap-md">
                    <button onClick={() => router.back()} style={{ color: 'var(--text-muted)' }}><ArrowLeft size={20} /></button>
                    <h1>{tCoach("publicProfile.title")}</h1>
                </div>
            </header>

            <div className="container section-padding" style={{ maxWidth: '800px' }}>
                <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-2xl)', boxShadow: 'var(--shadow-soft)', border: 'var(--border-soft)' }}>
                    <div style={{ display: 'flex', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)', flexWrap: 'wrap' }}>
                        <img
                            src={selectedCoach.avatar}
                            alt={selectedCoach.name}
                            style={{ width: '150px', height: '150px', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
                        />
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>{selectedCoach.name}</h2>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F5A623', fontWeight: 'bold' }}>
                                    <Star size={18} fill="#F5A623" /> 5.0
                                </div>
                            </div>
                            <p style={{ color: 'var(--accent-sage)', fontWeight: '600', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>{selectedCoach.title}</p>

                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                {selectedCoach.specialties.map(s => (
                                    <span key={s} style={{ background: 'var(--bg-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
                        <h3>{tCoach("publicProfile.aboutMe")}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            {tCoach("publicProfile.aboutBody")}
                        </p>
                    </section>

                    <div style={{ background: 'var(--accent-blue-light)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                        <ShieldCheck size={24} color="var(--accent-blue)" />
                        <p style={{ color: 'var(--accent-blue)', margin: 0, fontSize: '0.9rem' }}>{tCoach("publicProfile.privacyNote")}</p>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        <button
                            onClick={() => router.push(`/chat/${selectedCoach.id}`)}
                            style={{ flex: 1, padding: 'var(--spacing-md)', background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', borderRadius: 'var(--radius-md)', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)' }}
                        >
                            <MessageCircle size={20} /> {tCoach("publicProfile.startChat")}
                        </button>
                        <button
                            onClick={() => router.push(`/book/${selectedCoach.id}`)}
                            style={{ flex: 1, padding: 'var(--spacing-md)', background: 'var(--accent-sage)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)' }}
                        >
                            <Calendar size={20} /> {tCoach("publicProfile.book")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
