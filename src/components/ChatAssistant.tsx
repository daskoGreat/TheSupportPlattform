"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Minimize2, Send, Sparkles } from 'lucide-react';
import styles from './ChatAssistant.module.css';
import { useTranslation } from '@/i18n/client';
import { useLanguage } from '@/context/LanguageContext';

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState('');
    // Updated message type to support cards
    const [messages, setMessages] = useState<{
        role: 'assistant' | 'user',
        content: string,
        actions?: { label: string, path: string }[],
        coaches?: { id: string, name: string, avatar?: string, title: string, shortIntro: string }[],
        resources?: { id: string, title: string, description: string, category: string }[]
    }[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const { t } = useTranslation('chat');
    const { t: tCommon } = useTranslation('common');
    const { locale } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    // Add trigger listener for the Support Hub
    useEffect(() => {
        const handleTrigger = (e: any) => {
            const { action, text } = e.detail;
            setIsOpen(true);
            setIsMinimized(false);
            if (action === 'send' && text) {
                setInput(text);
            }
        };

        window.addEventListener('tsn:trigger-luna', handleTrigger);
        return () => window.removeEventListener('tsn:trigger-luna', handleTrigger);
    }, []);

    // Initial welcome message
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            const timer = setTimeout(() => {
                setIsTyping(false);
                setMessages([{
                    role: 'assistant',
                    content: t('welcome') || "Hi! I'm Luna, your supportive guide. How are you feeling today?"
                }]);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isOpen, messages.length, t]);

    // Refactored handleSend logic to be callable internally
    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { role: 'user', content: text }]);
        setIsTyping(true);

        try {
            // Call the matching API (shared with intake)
            const response = await fetch('/api/ai/match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: text })
            });
            const data = await response.json();

            setIsTyping(false);

            const assistantContent =
                data.message ||
                t('defaultResponse') ||
                "I'm here to help. What's on your mind?";

            const actions: { label: string; path: string }[] = [];
            actions.push({ label: tCommon('nav.coaches') || 'Coaches', path: '/coaches' });
            actions.push({ label: tCommon('nav.community') || 'Community', path: '/community' });

            setMessages(prev => [
                ...prev,
                {
                    role: 'assistant',
                    content: assistantContent,
                    coaches: data.coaches || [],
                    // Map communities into "resources" cards if present
                    resources: data.communities
                        ? data.communities.map((c: any) => ({
                              id: c.id,
                              title: c.title,
                              description: c.description,
                              category: 'Community',
                          }))
                        : undefined,
                    actions,
                },
            ]);
        } catch (error) {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm having a little trouble connecting right now, but I'm still here for you. Would you like to see our coaches instead?",
                actions: [{ label: 'View coaches', path: '/coaches' }]
            }]);
        }
    };

    // Use effect to handle the 'send' action from trigger
    useEffect(() => {
        if (input && isOpen && !isMinimized && messages[messages.length - 1]?.role !== 'user') {
            // Check if input was set by a trigger
            if (input.startsWith("MOOD_") || input.startsWith("ACTION_")) {
                const messageToSend = input.startsWith("MOOD_")
                    ? `I'm feeling ${input.split('_')[1]} right now.`
                    : "I'd like to continue our conversation.";

                setInput('');
                sendMessage(messageToSend);
            }
        }
    }, [input, isOpen, isMinimized]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;
        const text = input;
        setInput('');
        sendMessage(text);
    };

    if (!isOpen) {
        return (
            <button className={styles.trigger} onClick={() => setIsOpen(true)} aria-label="Open Chat">
                <MessageCircle size={28} />
            </button>
        );
    }

    return (
        <div className={`${styles.window} ${isMinimized ? styles.minimized : ''}`}>
            <div className={styles.header}>
                <div className={styles.headerInfo}>
                    <div className={styles.avatar}>
                        <Sparkles size={18} className={styles.avatarIcon} />
                    </div>
                    <div>
                        <h3 className={styles.name}>Luna</h3>
                        <p className={styles.status}>{t('status') || "Your Supportive Guide"}</p>
                    </div>
                </div>
                <div className={styles.headerActions}>
                    <button onClick={() => setIsMinimized(!isMinimized)} className={styles.actionBtn} aria-label="Minimize">
                        <Minimize2 size={18} />
                    </button>
                    <button onClick={() => setIsOpen(false)} className={styles.actionBtn} aria-label="Close">
                        <X size={18} />
                    </button>
                </div>
            </div>

            {!isMinimized && (
                <>
                    <div className={styles.messages} ref={scrollRef}>
                        {messages.map((msg, i) => (
                            <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                                <div className={styles.bubble}>
                                    <div className={styles.messageText}>{msg.content}</div>

                                    {msg.coaches && msg.coaches.length > 0 && (
                                        <div className={styles.recommendationLabel}>Recommended Coaches:</div>
                                    )}
                                    {msg.coaches && (
                                        <div className={styles.cardList}>
                                            {msg.coaches.map(coach => (
                                                <div key={coach.id} className={styles.coachChatCard}>
                                                    <img src={coach.avatar || '/avatars/default-coach.png'} alt={coach.name} className={styles.coachChatAvatar} />
                                                    <div className={styles.coachChatInfo}>
                                                        <h5>{coach.name}</h5>
                                                        <p>{coach.title}</p>
                                                        <Link href={`/coaches/${coach.id}`} className={styles.viewProfileBtn} onClick={() => setIsOpen(false)}>
                                                            View Profile
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {msg.resources && msg.resources.length > 0 && (
                                        <div className={styles.recommendationLabel}>Helpful Resources:</div>
                                    )}
                                    {msg.resources && (
                                        <div className={styles.cardList}>
                                            {msg.resources.map(res => (
                                                <div key={res.id} className={styles.resourceChatCard}>
                                                    <span className={styles.resCategory}>{res.category}</span>
                                                    <h5>{res.title}</h5>
                                                    <Link href={`/resources/${res.id}`} className={styles.readGuideBtn} onClick={() => setIsOpen(false)}>
                                                        Read Guide
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {msg.actions && (
                                        <div className={styles.actionCards}>
                                            {msg.actions.map((action, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={action.path}
                                                    className={styles.actionCard}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {action.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className={`${styles.message} ${styles.assistant}`}>
                                <div className={`${styles.bubble} ${styles.typing}`}>
                                    <span className={styles.dot}></span>
                                    <span className={styles.dot}></span>
                                    <span className={styles.dot}></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            placeholder={t('inputPlaceholder') || "Type a message..."}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className={styles.input}
                        />
                        <button onClick={handleSend} className={styles.sendBtn} disabled={!input.trim()}>
                            <Send size={18} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
