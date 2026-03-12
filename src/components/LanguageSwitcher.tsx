"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { useT } from "@/i18n/client";

export default function LanguageSwitcher() {
    const { locale, setLocale, availableLocales } = useLanguage();
    const { showToast } = useToast();
    const tCommon = useT("common");

    return (
        <div
            role="group"
            aria-label="Language selector"
            style={{
                display: "inline-flex",
                background: "rgba(17, 22, 29, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: 9999,
                padding: 4,
                gap: 4,
                backdropFilter: "blur(10px)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.55)",
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

