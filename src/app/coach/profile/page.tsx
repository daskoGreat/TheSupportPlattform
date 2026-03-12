import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { isCoachProfileComplete } from "@/lib/coachProfile";
import CoachProfileForm from "./CoachProfileForm";
import styles from "./profile.module.css";
import { getServerT } from "@/i18n/server";

export default async function CoachProfilePage() {
    const t = await getServerT();
    const session = await auth();

    if (!session?.user) {
        redirect("/signin");
    }

    if ((session.user as any).role !== "COACH") {
        redirect("/");
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            id: true,
            name: true,
            image: true,
        },
    });

    const coachProfile = await prisma.coachProfile.findUnique({
        where: { userId: session.user.id },
        select: {
            id: true,
            title: true,
            shortIntro: true,
            longBio: true,
            expertise: true,
            languages: true,
            yearsOfExperience: true,
        },
    });

    const complete = isCoachProfileComplete(user, coachProfile);

    const heading = complete ? t("coach:profile.editTitle") : t("coach:profile.createTitle");
    const subtitle = complete ? t("coach:profile.editSubtitle") : t("coach:profile.createSubtitle");

    return (
        <div className={styles.wrapper}>
            <div className={styles.bgCorner} />
            <div className={styles.card}>
                <header className={styles.header}>
                    <div>
                        <h1>{heading}</h1>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </div>
                </header>

                {!complete && (
                    <div className={styles.notice}>
                        <p className={styles.noticeTitle}>{t("coach:profile.noticeTitle")}</p>
                        <p className={styles.noticeBody}>
                            {t("coach:profile.noticeBody")}
                        </p>
                    </div>
                )}

                <CoachProfileForm
                    initialName={user?.name ?? ""}
                    initialImage={user?.image ?? ""}
                    initialTitle={coachProfile?.title ?? ""}
                    initialShortDescription={coachProfile?.shortIntro ?? ""}
                    initialLongBio={coachProfile?.longBio ?? ""}
                    initialSpecialties={coachProfile?.expertise ?? []}
                    initialLanguages={coachProfile?.languages ?? [t("coach:profile.defaultLanguage")]}
                    initialYearsOfExperience={coachProfile?.yearsOfExperience ?? 0}
                    isComplete={complete}
                />
            </div>
        </div>
    );
}

