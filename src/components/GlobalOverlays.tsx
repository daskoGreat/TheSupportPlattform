"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import RouteTransitionLoader from "./RouteTransitionLoader";
import ChatAssistant from "./ChatAssistant";

export default function GlobalOverlays() {
    return (
        <>
            <RouteTransitionLoader />
            <ChatAssistant />
        </>
    );
}

