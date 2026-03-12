'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './intake.module.css';
import { Send, User, Bot, Sparkles, Calendar, MessageCircle, ArrowRight, Eye, Users, Search } from 'lucide-react';
import { useSelection } from '@/context/SelectionContext';
import { useT } from '@/i18n/client';

interface Coach {
    id: string;
    name: string;
    title: string;
    avatar: string;
    specialties: string[];
    nextAvailable: string;
}

interface Community {
    id: string;
    title: string;
    description: string;
    members: string;
    activity: string;
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
    matches?: {
        message: string;
        coaches: Coach[];
        communities: Community[];
    };
}

export default function IntakeChat() {
    const tIntake = useT("intake");
    const tCommon = useT("common");
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: tIntake("assistantGreeting")
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { setSelectedCoach } = useSelection();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleAction = (coach: Coach, action: 'profile' | 'chat' | 'book') => {
        setSelectedCoach(coach);
        if (action === 'chat') router.push(`/chat/${coach.id}`);
        if (action === 'book') router.push(`/book/${coach.id}`);
        if (action === 'profile') router.push(`/coaches/${coach.id}`);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const currentInput = input;
        const userMessage: Message = { role: 'user', content: currentInput };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Simulate AI response for the Swedish flow
            const res = await fetch('/api/ai/match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: currentInput }),
            });
            const matchData = await res.json();

            setMessages(prev => [
                ...prev,
                {
                    role: 'assistant',
                    content: matchData.message,
                    matches: matchData
                }
            ]);

        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: tIntake("errorGeneric") }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            {/* Decorative branding background */}
            <img src="/branding/corner.png" className={styles.bgCorner} alt="" />

            <div className={styles.chatWindow}>
                <div className={styles.messages} ref={scrollRef}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={styles.messageGroup}>
                            {msg.content && (
                                <div className={`${styles.messageWrapper} ${styles[msg.role]}`}>
                                    <div className={styles.avatar}>
                                        {msg.role === 'assistant' ? <img src="/branding/heart.png" style={{ width: 24 }} alt="AI" /> : <User size={20} />}
                                    </div>
                                    <div className={styles.bubble}>
                                        {msg.content}
                                    </div>
                                </div>
                            )}

                            {msg.matches && (
                                <div className={styles.resultsArea}>
                                    {msg.matches.coaches.length > 0 && (
                                        <div className={styles.categorySection}>
                                            <h3 className={styles.sectionTitle}><Sparkles size={18} /> {tIntake("coachesTitle")}</h3>
                                            <div className={styles.coachGrid}>
                                                {msg.matches.coaches.map((coach) => (
                                                    <div key={coach.id} className={styles.coachCard}>
                                                        <img src={coach.avatar} alt={coach.name} className={styles.coachAvatar} />
                                                        <div className={styles.coachInfo}>
                                                            <p className={styles.coachName}>{coach.name}</p>
                                                            <p className={styles.coachTitle}>{coach.title}</p>
                                                            <div className={styles.specialties}>
                                                                {coach.specialties.slice(0, 2).map(s => <span key={s}>{s}</span>)}
                                                            </div>
                                                        </div>
                                                        <div className={styles.coachActions}>
                                                            <button onClick={() => handleAction(coach, 'profile')} className={styles.viewAction} title={tIntake("viewProfile")} aria-label={tIntake("viewProfile")}><Eye size={16} /></button>
                                                            <button onClick={() => handleAction(coach, 'chat')} className={styles.chatAction} title={tIntake("startChat")} aria-label={tIntake("startChat")}><MessageCircle size={16} /></button>
                                                            <button onClick={() => handleAction(coach, 'book')} className={styles.bookAction} title={tIntake("bookSession")} aria-label={tIntake("bookSession")}><Calendar size={16} /></button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {msg.matches.communities.length > 0 && (
                                        <div className={styles.categorySection}>
                                            <h3 className={styles.sectionTitle}><Users size={18} /> {tIntake("communityTitle")}</h3>
                                            <div className={styles.communityGrid}>
                                                {msg.matches.communities.map((comm) => (
                                                    <div key={comm.id} className={styles.communityCard}>
                                                        <div className={styles.commHeader}>
                                                            <h4>{comm.title}</h4>
                                                            <span className={styles.members}>{comm.members} medlemmar</span>
                                                        </div>
                                                        <p className={styles.commDesc}>{comm.description}</p>
                                                        <div className={styles.commFooter}>
                                                            <span className={styles.activity}>{comm.activity}</span>
                                                            <button onClick={() => router.push('/community')} className={styles.exploreBtn}>{tIntake("explore")} <ArrowRight size={14} /></button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className={`${styles.messageWrapper} ${styles.assistant}`}>
                            <div className={styles.avatar}>
                                <img src="/branding/heart.png" className={styles.pulse} style={{ width: 24 }} alt="AI" />
                            </div>
                            <div className={styles.bubble}>
                                {tIntake("thinking")}
                            </div>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className={styles.inputArea}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={tIntake("inputPlaceholder")}
                        className={styles.input}
                        disabled={isLoading}
                    />
                    <button type="submit" className={styles.sendBtn} disabled={isLoading || !input.trim()}>
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}
