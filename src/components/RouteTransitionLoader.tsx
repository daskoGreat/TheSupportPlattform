"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteTransitionLoader() {
    const pathname = usePathname();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // App Router has no route events; we show a subtle transition on pathname changes.
        setVisible(true);
        const t = setTimeout(() => setVisible(false), 500);
        return () => clearTimeout(t);
    }, [pathname]);

    return (
        <div
            aria-hidden="true"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                zIndex: 55,
                opacity: visible ? 1 : 0,
                transition: "opacity 200ms ease",
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: visible ? "85%" : "0%",
                    transition: visible ? "width 500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
                    background:
                        "linear-gradient(90deg, rgba(123,159,182,0.0) 0%, rgba(123,159,182,0.9) 30%, rgba(196,30,58,0.85) 100%)",
                    boxShadow: "0 0 18px rgba(123,159,182,0.35)",
                }}
            />
        </div>
    );
}

