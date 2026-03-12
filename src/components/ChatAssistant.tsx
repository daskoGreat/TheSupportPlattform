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

    // Initial welcome message (omitted for brevity in this chunk, keeping existing logic)

    // ...

    // Refactored handleSend logic to be callable internally
    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        const userMsg = text.toLowerCase();
        setMessages(prev => [...prev, { role: 'user', content: text }]);
        setIsTyping(true);

        try {
            // Call the matching API
            const response = await fetch('/api/ai/match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            const data = await response.json();

            setIsTyping(false);

            if (data.matched) {
                const matchedMsg = {
                    role: 'assistant' as const,
                    content: `I've found some specialized support for you regarding ${data.categories.join(' and ')}.`,
                    coaches: data.coaches,
                    resources: data.resources,
                    actions: [
                        { label: 'View all coaches', path: '/coaches' },
                        { label: 'Browse library', path: '/resources' }
                    ]
                };
                setMessages(prev => [...prev, matchedMsg]);
            } else {
                // Fallback to basic responses if no matching categories found
                let responseContent = t('defaultResponse');
                let suggestedActions: { label: string, path: string }[] = [];

                if (userMsg.includes('coach')) {
                    responseContent = t('coachResponse');
                    suggestedActions = [{ label: tCommon('nav.coaches'), path: '/coaches' }];
                } else if (userMsg.includes('communit')) {
                    responseContent = t('communityResponse');
                    suggestedActions = [{ label: tCommon('nav.community'), path: '/community' }];
                }

                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: responseContent || "I'm here to help. What's on your mind?",
                    actions: suggestedActions.length > 0 ? suggestedActions : undefined
                }]);
            }
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
