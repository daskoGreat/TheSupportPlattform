"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import RouteTransitionLoader from "./RouteTransitionLoader";
import ChatAssistant from "./ChatAssistant";

export default function GlobalOverlays() {
    return (
        <>
            <RouteTransitionLoader />
            <ChatAssistant />
            <div
                style={{
                    position: "fixed",
                    top: 16,
                    right: 16,
                    zIndex: 50,
                }}
            >
                <LanguageSwitcher />
            </div>
        </>
    );
}

