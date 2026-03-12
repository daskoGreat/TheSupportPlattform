import styles from "./profile.module.css";
import { getServerT } from "@/i18n/server";

export default async function CoachProfileLoading() {
    const t = await getServerT();
    return (
        <div className={styles.wrapper} aria-busy="true" aria-live="polite">
            <div className={styles.bgCorner} />
            <div className={styles.card}>
                <header className={styles.header}>
                    <div>
                        <h1>{t("coach:profile.createTitle")}</h1>
                        <p className={styles.subtitle}>{t("common:loading.loading")}</p>
                    </div>
                </header>

                <div className={`${styles.notice} skeleton`} style={{ height: 80, marginBottom: "var(--spacing-xl)" }} />

                <div className={styles.form}>
                    <div className={styles.avatarRow}>
                        <div className={`${styles.avatarPreview} skeleton`} />
                        <div className={styles.avatarFields}>
                            <div className="skeleton" style={{ height: 40, borderRadius: 9999 }} />
                            <div
                                className="skeleton"
                                style={{ height: 16, borderRadius: 9999, marginTop: 8, width: "70%" }}
                            />
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div className="skeleton" style={{ height: 56, borderRadius: 12 }} />
                        <div className="skeleton" style={{ height: 56, borderRadius: 12 }} />
                    </div>

                    <div className="skeleton" style={{ height: 88, borderRadius: 12 }} />
                    <div className="skeleton" style={{ height: 120, borderRadius: 12 }} />

                    <div className={styles.grid}>
                        <div className="skeleton" style={{ height: 56, borderRadius: 12 }} />
                        <div className="skeleton" style={{ height: 56, borderRadius: 12 }} />
                    </div>

                    <div className="skeleton" style={{ height: 56, borderRadius: 12 }} />

                    <div className={styles.actions}>
                        <div className="skeleton" style={{ width: 150, height: 40, borderRadius: 9999 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

