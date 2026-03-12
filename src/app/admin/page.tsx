'use client';

import { useEffect, useState } from 'react';
import styles from './admin.module.css';
import { Users, Calendar, MessageSquare, Shield, Activity, ArrowRight, Settings, Loader2 } from 'lucide-react';
import { useT } from '@/i18n/client';
import { getUsers, getBookings, getStats } from './actions';

export default function AdminDashboard() {
    const tAdmin = useT("admin");
    const [activeTab, setActiveTab] = useState('overview');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<{
        users: any[],
        bookings: any[],
        stats: any,
        totalPages: number,
        totalCount: number
    }>({
        users: [],
        bookings: [],
        stats: { users: '0', coaches: '0', bookings: '0', messages: '0' },
        totalPages: 1,
        totalCount: 0
    });

    const itemsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const timeoutId = setTimeout(() => {
                if (loading) {
                    console.warn("[Admin] Data fetching timed out after 15s");
                    setLoading(false);
                }
            }, 15000);

            try {
                if (activeTab === 'overview') {
                    const [statsData, bookingsData] = await Promise.all([
                        getStats(),
                        getBookings('', 1, 3)
                    ]);
                    setData(prev => ({
                        ...prev,
                        stats: statsData,
                        bookings: bookingsData.bookings
                    }));
                } else if (activeTab === 'users') {
                    const usersData = await getUsers(searchQuery, currentPage, itemsPerPage);
                    setData(prev => ({
                        ...prev,
                        users: usersData.users,
                        totalPages: usersData.totalPages,
                        totalCount: usersData.totalCount
                    }));
                } else if (activeTab === 'bookings') {
                    const bookingsData = await getBookings(searchQuery, currentPage, itemsPerPage);
                    setData(prev => ({
                        ...prev,
                        bookings: bookingsData.bookings,
                        totalPages: bookingsData.totalPages,
                        totalCount: bookingsData.totalCount
                    }));
                }
            } catch (error) {
                console.error("Error fetching admin data:", error);
            } finally {
                clearTimeout(timeoutId);
                setLoading(false);
            }
        };

        fetchData();
    }, [activeTab, searchQuery, currentPage]);

    const statsConfig = [
        { label: tAdmin('users'), value: data.stats.users.toString(), icon: Users, color: 'var(--floral-purple)' },
        { label: tAdmin('coaches'), value: data.stats.coaches.toString(), icon: Shield, color: 'var(--accent-sage)' },
        { label: tAdmin('bookings'), value: data.stats.bookings.toString(), icon: Calendar, color: 'var(--accent-blue)' },
        { label: tAdmin('messages'), value: data.stats.messages.toString(), icon: MessageSquare, color: 'var(--accent-heart)' },
    ];

    const handleTabChange = (tab: string) => {
        console.log(`[Admin] Switching tab to: ${tab}`);
        setActiveTab(tab);
        setSearchQuery('');
        setCurrentPage(1);
    };

    console.log(`[Admin] Rendering. Tab: ${activeTab}, Loading: ${loading}`);

    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src="/branding/heart.png" alt="" />
                    <span>{tAdmin('title')}</span>
                </div>

                <nav className={styles.nav}>
                    <button className={activeTab === 'overview' ? styles.active : ''} onClick={() => handleTabChange('overview')}>
                        <Activity size={18} /> {tAdmin('overview')}
                    </button>
                    <button className={activeTab === 'users' ? styles.active : ''} onClick={() => handleTabChange('users')}>
                        <Users size={18} /> {tAdmin('users')}
                    </button>
                    <button className={activeTab === 'bookings' ? styles.active : ''} onClick={() => handleTabChange('bookings')}>
                        <Calendar size={18} /> {tAdmin('bookings')}
                    </button>
                    <button className={activeTab === 'settings' ? styles.active : ''} onClick={() => handleTabChange('settings')}>
                        <Settings size={18} /> {tAdmin('settings')}
                    </button>
                </nav>
            </aside>

            <main className={styles.main}>
                {loading && (
                    <div className={styles.loaderOverlay}>
                        <div className={styles.simpleLoader}>Loading data...</div>
                    </div>
                )}

                {activeTab === 'overview' && (
                    <>
                        <header className={styles.header}>
                            <h2>{tAdmin('platformOverview')}</h2>
                            <div className={styles.userProfile}>
                                <span>Dashboard</span>
                                <div className={styles.avatar}>A</div>
                            </div>
                        </header>

                        <section className={styles.statsGrid}>
                            {statsConfig.map(s => (
                                <div key={s.label} className={styles.statCard}>
                                    <div className={styles.statInfo}>
                                        <p>{s.label}</p>
                                        <h3>{s.value}</h3>
                                    </div>
                                    <div className={styles.statIcon} style={{ background: s.color + '22', color: s.color }}>
                                        <s.icon size={24} />
                                    </div>
                                </div>
                            ))}
                        </section>

                        <section className={styles.content}>
                            <div className={styles.recentActivity}>
                                <div className={styles.sectionHeader}>
                                    <h3>{tAdmin('recentBookings')}</h3>
                                    <button className={styles.viewAll} onClick={() => handleTabChange('bookings')}>{tAdmin('viewAll')} <ArrowRight size={14} /></button>
                                </div>
                                <div className={styles.table}>
                                    <div className={styles.tableRow}>
                                        <div className={styles.tableCell}><strong>{tAdmin('table.user')}</strong></div>
                                        <div className={styles.tableCell}><strong>{tAdmin('table.coach')}</strong></div>
                                        <div className={styles.tableCell}><strong>{tAdmin('table.time')}</strong></div>
                                        <div className={styles.tableCell}><strong>{tAdmin('table.status')}</strong></div>
                                    </div>
                                    {data.bookings.map(b => (
                                        <div key={b.id} className={styles.tableRow}>
                                            <div className={styles.tableCell}>{b.user}</div>
                                            <div className={styles.tableCell}>{b.coach}</div>
                                            <div className={styles.tableCell}>{b.time}</div>
                                            <div className={styles.tableCell}><span className={`${styles.badge} ${styles[b.status.toLowerCase()]}`}>{tAdmin(`status${b.status}`)}</span></div>
                                        </div>
                                    ))}
                                    {data.bookings.length === 0 && (
                                        <div className={styles.emptyState}>No recent bookings found.</div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {activeTab === 'users' && (
                    <section className={styles.content}>
                        <div className={styles.contentHeader}>
                            <h3>{tAdmin('users')}</h3>
                            <div className={styles.searchBar}>
                                <input
                                    type="text"
                                    placeholder={tAdmin('searchUsers') || 'Search users...'}
                                    value={searchQuery}
                                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                />
                            </div>
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}><strong>{tAdmin('table.user')}</strong></div>
                                <div className={styles.tableCell}><strong>Email</strong></div>
                                <div className={styles.tableCell}><strong>Role</strong></div>
                                <div className={styles.tableCell}><strong>Joined</strong></div>
                            </div>
                            {data.users.map(u => (
                                <div key={u.id} className={styles.tableRow}>
                                    <div className={styles.tableCell}>{u.name || 'No Name'}</div>
                                    <div className={styles.tableCell}>{u.email}</div>
                                    <div className={styles.tableCell}>{u.role}</div>
                                    <div className={styles.tableCell}>{u.joined}</div>
                                </div>
                            ))}
                            {data.users.length === 0 && !loading && (
                                <div className={styles.emptyState}>No users found.</div>
                            )}
                        </div>
                        {data.totalPages > 1 && (
                            <div className={styles.pagination}>
                                <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
                                <span>Page {currentPage} of {data.totalPages}</span>
                                <button disabled={currentPage === data.totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
                            </div>
                        )}
                    </section>
                )}

                {activeTab === 'bookings' && (
                    <section className={styles.content}>
                        <div className={styles.contentHeader}>
                            <h3>{tAdmin('bookings')}</h3>
                            <div className={styles.searchBar}>
                                <input
                                    type="text"
                                    placeholder={tAdmin('searchBookings') || 'Search bookings...'}
                                    value={searchQuery}
                                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                                />
                            </div>
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                <div className={styles.tableCell}><strong>{tAdmin('table.user')}</strong></div>
                                <div className={styles.tableCell}><strong>{tAdmin('table.coach')}</strong></div>
                                <div className={styles.tableCell}><strong>{tAdmin('table.time')}</strong></div>
                                <div className={styles.tableCell}><strong>{tAdmin('table.status')}</strong></div>
                            </div>
                            {data.bookings.map(b => (
                                <div key={b.id} className={styles.tableRow}>
                                    <div className={styles.tableCell}>{b.user}</div>
                                    <div className={styles.tableCell}>{b.coach}</div>
                                    <div className={styles.tableCell}>{b.time}</div>
                                    <div className={styles.tableCell}><span className={`${styles.badge} ${styles[b.status.toLowerCase()]}`}>{tAdmin(`status${b.status}`)}</span></div>
                                </div>
                            ))}
                            {data.bookings.length === 0 && !loading && (
                                <div className={styles.emptyState}>No bookings found.</div>
                            )}
                        </div>
                        {data.totalPages > 1 && (
                            <div className={styles.pagination}>
                                <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
                                <span>Page {currentPage} of {data.totalPages}</span>
                                <button disabled={currentPage === data.totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
                            </div>
                        )}
                    </section>
                )}

                {activeTab === 'settings' && (
                    <section className={styles.content}>
                        <h3>{tAdmin('settings')}</h3>
                        <div className={styles.settingsGrid}>
                            <div className={styles.settingCard}>
                                <h4>General Settings</h4>
                                <p>View and manage general platform settings.</p>
                                <button className={styles.secondaryBtn}>Toggle Maintenance Mode</button>
                            </div>
                            <div className={styles.settingCard}>
                                <h4>Notifications</h4>
                                <p>Manage email and push notifications settings.</p>
                                <button className={styles.secondaryBtn}>Configure Postmark</button>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
