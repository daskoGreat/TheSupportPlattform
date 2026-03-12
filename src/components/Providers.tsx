'use client';

import { SessionProvider } from "next-auth/react";
import { ToastProvider } from "@/context/ToastContext";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <LanguageProvider>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </LanguageProvider>
        </SessionProvider>
    );
}

