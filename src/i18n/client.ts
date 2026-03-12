"use client";

import type { Namespace } from "./types";
import { useLanguage } from "@/context/LanguageContext";

export function useTranslation(ns?: Namespace) {
    const { t, tn } = useLanguage();
    const translate = ns ? tn(ns) : t;
    return { t: translate };
}

export function useT(ns?: Namespace) {
    const { t, tn } = useLanguage();
    return ns ? tn(ns) : t;
}
