import { getServerT } from "@/i18n/server";

export default async function HowItWorks() {
    const t = await getServerT();
    return (
        <div className="container section-padding" style={{ maxWidth: '800px' }}>
            <h1>{t("howItWorks:title")}</h1>
            <p>{t("howItWorks:intro")}</p>

            <div style={{ marginTop: 'var(--spacing-2xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                <section>
                    <h3>{t("howItWorks:s1Title")}</h3>
                    <p>{t("howItWorks:s1Body")}</p>
                </section>

                <section>
                    <h3>{t("howItWorks:s2Title")}</h3>
                    <p>{t("howItWorks:s2Body")}</p>
                </section>

                <section>
                    <h3>{t("howItWorks:s3Title")}</h3>
                    <p>{t("howItWorks:s3Body")}</p>
                </section>
            </div>
        </div>
    );
}
