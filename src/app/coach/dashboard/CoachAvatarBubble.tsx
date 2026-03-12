"use client";

import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";
import { useT } from "@/i18n/client";

export default function CoachAvatarBubble({
    name,
    image,
}: {
    name: string;
    image: string | null;
}) {
    const router = useRouter();
    const tCoach = useT("coach");

    const initials = name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("") || "C";

    return (
        <button
            type="button"
            className={styles.profileBubble}
            onClick={() => router.push("/coach/profile")}
            aria-label={tCoach("profile.editTitle")}
        >
            {image ? (
                <img src={image} alt={name} className={styles.profileImage} />
            ) : (
                <span className={styles.profileInitials}>{initials}</span>
            )}
        </button>
    );
}

