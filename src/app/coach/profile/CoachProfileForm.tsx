"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile.module.css";
import { useToast } from "@/context/ToastContext";
import { useT } from "@/i18n/client";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
    initialName: string;
    initialImage: string;
    initialTitle: string;
    initialShortDescription: string;
    initialLongBio: string;
    initialSpecialties: string[];
    initialLanguages: string[];
    initialYearsOfExperience: number;
    isComplete: boolean;
};

export default function CoachProfileForm(props: Props) {
    const router = useRouter();
    const { showToast } = useToast();
    const tCoach = useT("coach");
    const tCommon = useT("common");
    const { locale } = useLanguage();

    const [name, setName] = useState(props.initialName);
    const [image, setImage] = useState(props.initialImage);
    const [title, setTitle] = useState(props.initialTitle);
    const [shortDescription, setShortDescription] = useState(
        props.initialShortDescription
    );
    const [longBio, setLongBio] = useState(props.initialLongBio);
    const [specialties, setSpecialties] = useState(
        props.initialSpecialties.join(", ")
    );
    const [languages, setLanguages] = useState(props.initialLanguages.join(", "));
    const [yearsOfExperience, setYearsOfExperience] = useState(
        props.initialYearsOfExperience > 0
            ? String(props.initialYearsOfExperience)
            : ""
    );

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const initials =
        name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join("") || "C";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!image.trim()) {
            setError(tCoach("profile.validation.image"));
            return;
        }

        if (!name.trim()) {
            setError(tCoach("profile.validation.name"));
            return;
        }

        if (!shortDescription.trim()) {
            setError(tCoach("profile.validation.short"));
            return;
        }

        setIsSaving(true);

        try {
            const res = await fetch("/api/coach/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-tsn-locale": locale,
                },
                body: JSON.stringify({
                    name,
                    image,
                    shortDescription,
                    title,
                    longBio,
                    specialties,
                    yearsOfExperience,
                    languages,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                const message = data.error || tCommon("toast.actionFailed");
                setError(message);
                showToast(message, "error");
                return;
            }

            setSuccess(tCommon("toast.profileSaved"));
            showToast(tCommon("toast.profileSaved"), "success");

            setTimeout(() => {
                router.push("/coach/dashboard");
            }, 700);
        } catch (err) {
            const message = tCommon("toast.actionFailed");
            setError(message);
            showToast(message, "error");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.avatarRow}>
                <div className={styles.avatarPreview} aria-busy={isSaving}>
                    {image ? (
                        <img src={image} alt={name || "Coach"} />
                    ) : (
                        <span>{initials}</span>
                    )}
                    {isSaving && (
                        <div className={styles.avatarOverlay}>
                            <span className="spinner" aria-hidden="true" />
                            <span className={styles.avatarOverlayText}>{tCoach("profile.saving")}</span>
                        </div>
                    )}
                </div>
                <div className={styles.avatarFields}>
                    <label className={styles.label}>
                        {tCoach("profile.avatar")}
                        <input
                            type="url"
                            className={styles.input}
                            placeholder={tCoach("profile.avatarPlaceholder")}
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                    <p className={styles.helperText}>
                        {tCoach("profile.avatarHelper")}
                    </p>
                </div>
            </div>

            <div className={styles.grid}>
                <label className={styles.label}>
                    {tCoach("profile.name")}
                    <input
                        type="text"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={tCoach("profile.namePlaceholder")}
                    />
                </label>

                <label className={styles.label}>
                    {tCoach("profile.title")}
                    <input
                        type="text"
                        className={styles.input}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={tCoach("profile.titlePlaceholder")}
                    />
                </label>
            </div>

            <label className={styles.label}>
                {tCoach("profile.shortDescription")}
                <textarea
                    className={styles.textarea}
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    placeholder={tCoach("profile.shortPlaceholder")}
                    rows={3}
                />
            </label>

            <label className={styles.label}>
                {tCoach("profile.longBio")}
                <textarea
                    className={styles.textarea}
                    value={longBio}
                    onChange={(e) => setLongBio(e.target.value)}
                    placeholder={tCoach("profile.longPlaceholder")}
                    rows={5}
                />
            </label>

            <div className={styles.grid}>
                <label className={styles.label}>
                    {tCoach("profile.specialties")}
                    <input
                        type="text"
                        className={styles.input}
                        value={specialties}
                        onChange={(e) => setSpecialties(e.target.value)}
                        placeholder={tCoach("profile.specialtiesPlaceholder")}
                    />
                </label>

                <label className={styles.label}>
                    {tCoach("profile.languages")}
                    <input
                        type="text"
                        className={styles.input}
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        placeholder={tCoach("profile.languagesPlaceholder")}
                    />
                </label>
            </div>

            <label className={styles.label}>
                {tCoach("profile.years")}
                <input
                    type="number"
                    min={0}
                    className={styles.input}
                    value={yearsOfExperience}
                    onChange={(e) => setYearsOfExperience(e.target.value)}
                    placeholder={tCoach("profile.yearsPlaceholder")}
                />
            </label>

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

            <div className={styles.actions}>
                <button
                    type="submit"
                    className={styles.primaryButton}
                    disabled={isSaving}
                    aria-busy={isSaving}
                    aria-live="polite"
                >
                    {isSaving && <span className="spinner" style={{ marginRight: 8 }} aria-hidden="true" />}
                    {isSaving
                        ? tCoach("profile.saving")
                        : props.isComplete
                        ? tCoach("profile.update")
                        : tCoach("profile.save")}
                </button>
            </div>
        </form>
    );
}

