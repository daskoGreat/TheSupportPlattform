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

export async function getServerLocale(): Promise<Locale> {
    const cookieStore = await cookies();
    const raw = cookieStore.get(COOKIE_KEY)?.value;
    return normalizeLocale(raw) ?? "en";
}

export async function getServerT(locale?: Locale) {
    const activeLocale = locale ?? await getServerLocale();
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

