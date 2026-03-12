"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { useT } from "@/i18n/client";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const { locale, setLocale, availableLocales } = useLanguage();
    const { showToast } = useToast();
    const tCommon = useT("common");
    const router = useRouter();

    return (
        <div
            role="group"
            aria-label="Language selector"
            style={{
                display: "inline-flex",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 9999,
                padding: 2,
                gap: 2,
                backdropFilter: "blur(10px)",
            }}
        >
            {availableLocales.map((l) => {
                const active = l.locale === locale;
                return (
                    <button
                        key={l.locale}
                        type="button"
                        onClick={() => {
                            if (l.locale === locale) return;
                            setLocale(l.locale);
                            showToast(tCommon("toast.languageUpdated"), "info");
                            // Small delay to ensure state and cookie are reconciled before refresh
                            setTimeout(() => {
                                router.refresh();
                            }, 50);
                        }}
                        aria-label={l.label}
                        title={l.label}
                        aria-pressed={active}
                        style={{
                            width: 36,
                            height: 32,
                            borderRadius: 9999,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 16,
                            lineHeight: 1,
                            background: active ? "rgba(123, 159, 182, 0.18)" : "transparent",
                            border: active ? "1px solid rgba(123, 159, 182, 0.55)" : "1px solid transparent",
                            color: "var(--text-primary)",
                            transition: "var(--transition-smooth)",
                            transform: active ? "translateY(-0.5px)" : "none",
                        }}
                    >
                        <span
                            aria-hidden="true"
                            style={{
                                filter: "saturate(1.05)",
                            }}
                        >
                            {l.flag}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

