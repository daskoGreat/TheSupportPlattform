"use client";

import type { Namespace } from "./types";
import { useLanguage } from "@/context/LanguageContext";

export function useT(ns?: Namespace) {
    const { t, tn } = useLanguage();
    return ns ? tn(ns) : t;
}

