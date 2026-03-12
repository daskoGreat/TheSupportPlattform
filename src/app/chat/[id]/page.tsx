'use client';

import { useState, useEffect, useRef, use } from 'react';
import { useRouter } from 'next/navigation';
import { useSelection } from '@/context/SelectionContext';
import styles from './chat.module.css';
import { ArrowLeft, Send, ShieldCheck, Heart } from 'lucide-react';
import { useT } from '@/i18n/client';

export default function CoachChat({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const tChat = useT("chat");
    const { selectedCoach } = useSelection();
    const [messages, setMessages] = useState<{ id: string; sender: 'user' | 'coach'; text: string; time: string }[]>([
        { id: '1', sender: 'coach', text: tChat("initialCoachMessage"), time: '14:20' }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Intelligent auto-scroll tracking
    const isUserScrolling = useRef(false);

    const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    // Scroll listener to determine if user is manually scrolling up
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

        // If user is within 80px of bottom, they aren't considered manually scrolling
        isUserScrolling.current = distanceFromBottom > 80;
    };

    useEffect(() => {
        if (!isUserScrolling.current) {
            scrollToBottom();
        }
    }, [messages]);

    // Initial scroll
    useEffect(() => {
        scrollToBottom('auto');
    }, []);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, {
            id: Date.now().toString(),
            sender: 'user',
            text: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInput('');

        // Reset scrolling flag so their own message forces scroll to bottom
        isUserScrolling.current = false;
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className="container flex items-center gap-md">
                    <button onClick={() => router.back()} className={styles.backBtn}><ArrowLeft size={20} /></button>
                    <img src={selectedCoach?.avatar} alt={selectedCoach?.name} className={styles.avatar} />
                    <div>
                        <h2 className={styles.name}>{selectedCoach?.name || tChat('header.defaultCoach')}</h2>
                        <p className={styles.status}>{tChat('header.online')}</p>
                    </div>
                </div>
            </header>

            <div className={styles.messages} ref={scrollRef} onScroll={handleScroll}>
                <div className={styles.disclaimer}>
                    <ShieldCheck size={16} />
                    {tChat('disclaimer')}
                </div>

                {messages.length === 0 ? (
                    <div className={styles.emptyState}>
                        <Heart size={32} strokeWidth={1.5} />
                        <p>{tChat('emptyTitle')}</p>
                        <span style={{ fontSize: '0.85rem' }}>{tChat('emptySubtitle')}</span>
                    </div>
                ) : (
                    messages.map((msg, index) => {
                        const previousMsg = messages[index - 1];
                        const isSameSenderAsPrevious = previousMsg && previousMsg.sender === msg.sender;

                        return (
                            <div
                                key={msg.id}
                                className={`${styles.messageWrapper} ${styles[msg.sender]}`}
                                style={{ marginTop: isSameSenderAsPrevious ? '0px' : '8px' }}
                            >
                                <div className={styles.bubble}>
                                    {msg.text}
                                    <span className={styles.time}>{msg.time}</span>
                                </div>
                            </div>
                        );
                    })
                )}
                {/* Invisible element to scroll to */}
                <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputArea}>
                <div className="container">
                    <form onSubmit={handleSend} className={styles.form}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={tChat('inputPlaceholder')}
                            className={styles.input}
                        />
                        <button type="submit" className={styles.sendBtn}><Send size={20} /></button>
                    </form>
                    <div className={styles.bookingBar}>
                        {tChat('bookBar')} <button onClick={() => router.push(`/book/${id}`)} className={styles.bookInChat}>{tChat('bookCta')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
