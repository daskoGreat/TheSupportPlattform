import styles from "./dashboard.module.css";
import { getServerT } from "@/i18n/server";

export default async function CoachDashboardLoading() {
    const t = await getServerT();
    return (
        <div className="container section-padding" aria-busy="true" aria-live="polite">
            <div className={styles.dashboardHeader}>
                <h1>{t("coach:dashboard.title")}</h1>
                <div className={`${styles.profileBubble} skeleton`} aria-hidden="true" />
            </div>

            <div className={styles.summaryRow}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className={`${styles.summaryCard} skeleton`} />
                ))}
            </div>

            <div className={styles.mainGrid} style={{ marginTop: "var(--spacing-lg)" }}>
                {/* Messages skeleton panel */}
                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h2>{t("coach:dashboard.messages")}</h2>
                    </div>
                    <div className={styles.panelContent}>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <div key={idx} className={`${styles.conversationItem} skeleton`} style={{ height: 64 }} />
                        ))}
                    </div>
                </div>

                {/* Bookings skeleton panel */}
                <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <h2>{t("coach:dashboard.bookings")}</h2>
                    </div>
                    <div className={styles.panelContent}>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className={`${styles.bookingCard} skeleton`} style={{ height: 80 }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

