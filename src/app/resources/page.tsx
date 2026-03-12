import prisma from '@/lib/prisma';
import Link from 'next/link';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import styles from './Resources.module.css';

export default async function ResourcesPage() {
    const resources = await prisma.resource.findMany({
        orderBy: { createdAt: 'desc' }
    });

    const categories = Array.from(new Set(resources.map(r => r.category)));

    return (
        <div className="page-content">
            <div className={styles.heroSection}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Support Library</h1>
                    <p className={styles.heroSubtitle}>Explore practical guides, tools, and articles to support your mental wellbeing.</p>

                    <div className={styles.searchBar}>
                        <Search className={styles.searchIcon} size={20} />
                        <input type="text" placeholder="Search resources..." className={styles.searchInput} />
                    </div>
                </div>
            </div>

            <main className="container section-padding">
                <div className={styles.categoryFilter}>
                    <button className={`${styles.categoryBtn} ${styles.active}`}>All Resources</button>
                    {categories.map(category => (
                        <button key={category} className={styles.categoryBtn}>{category}</button>
                    ))}
                </div>

                {resources.length === 0 ? (
                    <div className={styles.emptyState}>
                        <BookOpen size={48} className={styles.emptyIcon} />
                        <h3>No resources found yet</h3>
                        <p>We're currently building our library. Check back soon for more guides.</p>
                    </div>
                ) : (
                    <div className={styles.resourceGrid}>
                        {resources.map((resource) => (
                            <div key={resource.id} className={styles.resourceCard}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.categoryTag}>{resource.category}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h4 className={styles.cardTitle}>{resource.title}</h4>
                                    <p className={styles.cardDesc}>{resource.description}</p>
                                </div>
                                <div className={styles.cardFooter}>
                                    <Link href={`/resources/${resource.id}`} className={styles.readMoreBtn}>
                                        Read More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
