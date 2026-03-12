import type { Locale, Namespace, Dictionary } from "./types";

type ResourceBundle = Record<Namespace, Dictionary>;

// Static imports keep it simple and robust.
// If this grows, we can switch to dynamic imports per-locale.
import en_common from "@/locales/en/common.json";
import en_auth from "@/locales/en/auth.json";
import en_home from "@/locales/en/home.json";
import en_intake from "@/locales/en/intake.json";
import en_coach from "@/locales/en/coach.json";
import en_chat from "@/locales/en/chat.json";
import en_bookings from "@/locales/en/bookings.json";
import en_community from "@/locales/en/community.json";
import en_admin from "@/locales/en/admin.json";
import en_howItWorks from "@/locales/en/howItWorks.json";

import sv_common from "@/locales/sv/common.json";
import sv_auth from "@/locales/sv/auth.json";
import sv_home from "@/locales/sv/home.json";
import sv_intake from "@/locales/sv/intake.json";
import sv_coach from "@/locales/sv/coach.json";
import sv_chat from "@/locales/sv/chat.json";
import sv_bookings from "@/locales/sv/bookings.json";
import sv_community from "@/locales/sv/community.json";
import sv_admin from "@/locales/sv/admin.json";
import sv_howItWorks from "@/locales/sv/howItWorks.json";

import es_common from "@/locales/es/common.json";
import es_auth from "@/locales/es/auth.json";
import es_home from "@/locales/es/home.json";
import es_intake from "@/locales/es/intake.json";
import es_coach from "@/locales/es/coach.json";
import es_chat from "@/locales/es/chat.json";
import es_bookings from "@/locales/es/bookings.json";
import es_community from "@/locales/es/community.json";
import es_admin from "@/locales/es/admin.json";
import es_howItWorks from "@/locales/es/howItWorks.json";

const resources: Record<Locale, ResourceBundle> = {
    en: {
        common: en_common,
        auth: en_auth,
        home: en_home,
        intake: en_intake,
        coach: en_coach,
        chat: en_chat,
        bookings: en_bookings,
        community: en_community,
        admin: en_admin,
        howItWorks: en_howItWorks,
    },
    sv: {
        common: sv_common,
        auth: sv_auth,
        home: sv_home,
        intake: sv_intake,
        coach: sv_coach,
        chat: sv_chat,
        bookings: sv_bookings,
        community: sv_community,
        admin: sv_admin,
        howItWorks: sv_howItWorks,
    },
    es: {
        common: es_common,
        auth: es_auth,
        home: es_home,
        intake: es_intake,
        coach: es_coach,
        chat: es_chat,
        bookings: es_bookings,
        community: es_community,
        admin: es_admin,
        howItWorks: es_howItWorks,
    },
};

export function getResources(locale: Locale): ResourceBundle {
    return resources[locale] ?? resources.en;
}

