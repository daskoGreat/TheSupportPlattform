import type { Locale, Namespace } from "./types";
import { getResources } from "./resources";
import { getNestedValue, interpolate } from "./utils";
import { cookies } from "next/headers";

const COOKIE_KEY = "tsn_locale";

function normalizeLocale(input: string | null | undefined): Locale | null {
    if (!input) return null;
    const lower = input.toLowerCase();
    if (lower === "en" || lower.startsWith("en-")) return "en";
    if (lower === "sv" || lower.startsWith("sv-")) return "sv";
    if (lower === "es" || lower.startsWith("es-")) return "es";
    return null;
}

export function getServerLocale(): Locale {
    try {
        const cookieStore: any = cookies();
        let raw: string | null | undefined = undefined;

        if (cookieStore && typeof cookieStore.get === "function") {
            raw = cookieStore.get(COOKIE_KEY)?.value;
        } else if (cookieStore && typeof cookieStore[COOKIE_KEY] !== "undefined") {
            const value = cookieStore[COOKIE_KEY];
            raw = typeof value === "string" ? value : (value?.value as string | undefined);
        }

        return normalizeLocale(raw) ?? "en";
    } catch {
        return "en";
    }
}

export function getServerT(locale?: Locale) {
    const activeLocale = locale ?? getServerLocale();
    const resources = getResources(activeLocale);
    const fallbackResources = getResources("en");

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
}

