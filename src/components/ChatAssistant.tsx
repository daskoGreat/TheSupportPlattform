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
    const [messages, setMessages] = useState<{ role: 'assistant' | 'user', content: string, actions?: { label: string, path: string }[] }[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const { t } = useTranslation('chat');
    const { t: tCommon } = useTranslation('common');
    const { locale } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial welcome message - updates on locale change if it's the first message
    useEffect(() => {
        if (messages.length <= 1) {
            const welcomeMsg = {
                role: 'assistant' as const,
                content: t('welcome') || "Hello! I'm Luna, your friendly guide at The Support Network. I'm here to help you find the right kind of support. Whenever you're ready, tell me a little about what's on your mind.",
                actions: [
                    { label: tCommon('nav.coaches'), path: '/coaches' },
                    { label: tCommon('nav.community'), path: '/community' },
                    { label: tCommon('nav.resources'), path: '/resources' }
                ]
            };

            if (messages.length === 0) {
                setMessages([welcomeMsg]);
            } else if (messages[0].role === 'assistant') {
                // Update existing welcome message if language changed
                setMessages([welcomeMsg]);
            }
        }
    }, [locale, t, tCommon]);

    // Handle external triggers (e.g. from Support Hub)
    useEffect(() => {
        const handleTrigger = (event: Event) => {
            const customEvent = event as CustomEvent;
            const { action, text } = customEvent.detail || {};

            setIsOpen(true);
            setIsMinimized(false);

            if (action === 'send' && text) {
                // Simulate the user sending a message
                setInput(text);
                // We'll use a small timeout to let the state update or just call handleSend directly if we refactor it
            }
        };

        window.addEventListener('tsn:trigger-luna', handleTrigger);
        return () => window.removeEventListener('tsn:trigger-luna', handleTrigger);
    }, []);

    // Refactored handleSend logic to be callable internally
    const sendMessage = (text: string) => {
        if (!text.trim()) return;

        const userMsg = text.toLowerCase();
        setMessages(prev => [...prev, { role: 'user', content: text }]);
        setIsTyping(true);

        // Simulated AI logic with keyword parsing
        setTimeout(() => {
            setIsTyping(false);

            let responseContent = t('defaultResponse');
            let suggestedActions: { label: string, path: string }[] = [];

            if (userMsg.includes('coach') || userMsg.includes('yes') && messages[messages.length - 1]?.content.includes('coach')) {
                responseContent = t('coachResponse');
                suggestedActions = [{ label: tCommon('nav.coaches'), path: '/coaches' }];
            } else if (userMsg.includes('communit') || userMsg.includes('group') || userMsg.includes('yes') && messages[messages.length - 1]?.content.includes('communit')) {
                responseContent = t('communityResponse');
                suggestedActions = [{ label: tCommon('nav.community'), path: '/community' }];
            } else if (userMsg.includes('resourc') || userMsg.includes('library') || userMsg.includes('help')) {
                responseContent = t('resourcesResponse');
                suggestedActions = [{ label: tCommon('nav.resources'), path: '/resources' }];
            } else if (userMsg.includes('stress') || userMsg.includes('anxiety') || userMsg.includes('feel') || userMsg.includes('mår') || userMsg.includes('mood') || userMsg.includes('känsla')) {
                responseContent = t('defaultResponse');
                suggestedActions = [
                    { label: tCommon('nav.coaches'), path: '/coaches' },
                    { label: tCommon('nav.community'), path: '/community' }
                ];
            } else if (userMsg === 'yes' || userMsg === 'ja' || userMsg === 'si') {
                responseContent = t('defaultResponse'); // General help if 'yes' is ambiguous
                suggestedActions = [
                    { label: tCommon('nav.coaches'), path: '/coaches' },
                    { label: tCommon('nav.community'), path: '/community' }
                ];
            }

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: responseContent || "I'm here to help. Would you like to see our coaches or community groups?",
                actions: suggestedActions.length > 0 ? suggestedActions : undefined
            }]);
        }, 1500);
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
                                    {msg.content}
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
