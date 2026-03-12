import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Tag, Heart, MessageCircle } from 'lucide-react';
import styles from './ResourceDetail.module.css';

interface ResourceDetailPageProps {
    params: { id: string };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const resource = await (prisma as any).resource.findUnique({
        where: { id: id }
    });

    if (!resource) {
        notFound();
    }

    // Recommendation logic: find coaches with matching specialties
    const suggestedCoaches = await prisma.coachProfile.findMany({
        where: {
            expertise: {
                hasSome: [resource.category, ...resource.tags]
            }
        },
        include: {
            user: true
        },
        take: 3
    });

    return (
        <div className="page-content">
            <div className="container section-padding">
                <Link href="/resources" className={styles.backBtn}>
                    <ArrowLeft size={18} /> Back to Library
                </Link>

                <div className={styles.layout}>
                    <article className={styles.mainContent}>
                        <header className={styles.resourceHeader}>
                            <span className={styles.categoryTag}>{resource.category}</span>
                            <h1 className={styles.title}>{resource.title}</h1>
                            <div className={styles.meta}>
                                {resource.author && (
                                    <div className={styles.metaItem}>
                                        <User size={16} /> <span>{resource.author}</span>
                                    </div>
                                )}
                                <div className={styles.metaItem}>
                                    <Clock size={16} /> <span>{new Date(resource.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </header>

                        <div className={styles.content}>
                            {/* In a real app we'd use a markdown renderer here */}
                            {resource.content.split('\n').map((line: string, i: number) => {
                                if (line.startsWith('###')) return <h3 key={i}>{line.replace('###', '')}</h3>;
                                if (line.startsWith('##')) return <h2 key={i}>{line.replace('##', '')}</h2>;
                                if (line.startsWith('#')) return <h1 key={i}>{line.replace('#', '')}</h1>;
                                if (line.startsWith('-')) return <li key={i}>{line.replace('-', '')}</li>;
                                return <p key={i}>{line}</p>;
                            })}
                        </div>
                    </article>

                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>Matched Support</h3>
                            <p className={styles.sidebarDesc}>Specialized coaches ready to support you with this topic.</p>

                            <div className={styles.coachList}>
                                {suggestedCoaches.length > 0 ? (
                                    suggestedCoaches.map((coach) => (
                                        <Link key={coach.id} href={`/coaches/${coach.userId}`} className={styles.miniCoachCard}>
                                            <div className={styles.coachAvatar}>
                                                {coach.user.image ? (
                                                    <img src={coach.user.image} alt={coach.user.name || ''} />
                                                ) : (
                                                    <Heart size={18} className={styles.avatarPlaceholder} />
                                                )}
                                            </div>
                                            <div className={styles.miniCoachInfo}>
                                                <h4 className={styles.miniCoachName}>{coach.user.name}</h4>
                                                <p className={styles.miniCoachTitle}>{coach.title}</p>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className={styles.emptySidebar}>
                                        <p>No matching coaches yet.</p>
                                    </div>
                                )}
                            </div>

                            <Link href="/coaches" className={styles.viewAllBtn}>
                                View all coaches
                            </Link>
                        </div>

                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>Topics</h3>
                            <div className={styles.tagGrid}>
                                {resource.tags.map((tag: string) => (
                                    <span key={tag} className={styles.topicTag}>
                                        <Tag size={12} /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
