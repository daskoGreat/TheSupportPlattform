import '@/styles/globals.css';
import type { Metadata } from 'next';
import { SelectionProvider } from '@/context/SelectionContext';
import { Providers } from '@/components/Providers';
import GlobalOverlays from '@/components/GlobalOverlays';
import Navbar from '@/components/Navbar';
import { getServerLocale } from '@/i18n/server';
import { auth } from '@/auth';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'The Support Network',
    description: 'A warm, safe and inviting support marketplace.',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getServerLocale();
    const session = await auth();
    const isAuthenticated = !!session;

    return (
        <html lang={locale} suppressHydrationWarning>
            <body>
                <Providers>
                    <SelectionProvider>
                        {isAuthenticated && (
                            <>
                                <GlobalOverlays />
                                <Navbar />
                            </>
                        )}
                        <main className={isAuthenticated ? "page-content" : undefined}>
                            {children}
                        </main>
                    </SelectionProvider>
                </Providers>
            </body>
        </html>
    );
}
