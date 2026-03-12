"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale, Namespace } from "@/i18n/types";
import { getResources } from "@/i18n/resources";
import { getNestedValue, interpolate } from "@/i18n/utils";

type LanguageContextValue = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    availableLocales: { locale: Locale; label: string; flag: string }[];
    t: (key: string, vars?: Record<string, string | number>) => string;
    tn: (ns: Namespace) => (key: string, vars?: Record<string, string | number>) => string;
};

const STORAGE_KEY = "tsn_locale";
const COOKIE_KEY = "tsn_locale";

const availableLocales = [
    { locale: "en" as const, label: "English", flag: "🇬🇧" },
    { locale: "sv" as const, label: "Svenska", flag: "🇸🇪" },
    { locale: "es" as const, label: "Español", flag: "🇪🇸" },
];

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function normalizeLocale(input: string | null | undefined): Locale | null {
    if (!input) return null;
    const lower = input.toLowerCase();
    if (lower === "en" || lower.startsWith("en-")) return "en";
    if (lower === "sv" || lower.startsWith("sv-")) return "sv";
    if (lower === "es" || lower.startsWith("es-")) return "es";
    return null;
}

function readCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
    return null;
}

function writeCookie(name: string, value: string) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");

    useEffect(() => {
        const fromStorage = normalizeLocale(localStorage.getItem(STORAGE_KEY));
        const fromCookie = normalizeLocale(readCookie(COOKIE_KEY));

        // Priority: Storage > Cookie > Default (English)
        // We ignore navigator.language to ensure the user's preference for English is respected.
        setLocaleState(fromStorage ?? fromCookie ?? "en");
    }, []);

    const setLocale = (next: Locale) => {
        setLocaleState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // ignore
        }
        writeCookie(COOKIE_KEY, next);
    };

    const resources = useMemo(() => getResources(locale), [locale]);
    const fallbackResources = useMemo(() => getResources("en"), []);

    const t = useMemo(() => {
        return (key: string, vars?: Record<string, string | number>) => {
            const [ns, rest] = key.includes(":") ? (key.split(":") as [string, string]) : ["common", key];
            const nsTyped = (ns as Namespace) || "common";

            const value =
                (getNestedValue(resources[nsTyped], rest) as string | undefined) ??
                (getNestedValue(fallbackResources[nsTyped], rest) as string | undefined) ??
                key;

            if (typeof value !== "string") return key;
            return interpolate(value, vars);
        };
    }, [resources, fallbackResources]);

    const tn = useMemo(() => {
        return (ns: Namespace) => (key: string, vars?: Record<string, string | number>) => t(`${ns}:${key}`, vars);
    }, [t]);

    const value: LanguageContextValue = {
        locale,
        setLocale,
        availableLocales,
        t,
        tn,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return ctx;
}

