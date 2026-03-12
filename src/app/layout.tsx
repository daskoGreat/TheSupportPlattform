import '@/styles/globals.css';
import type { Metadata } from 'next';
import { SelectionProvider } from '@/context/SelectionContext';
import { Providers } from '@/components/Providers';
import GlobalOverlays from '@/components/GlobalOverlays';
import { getServerLocale } from '@/i18n/server';

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
    return (
        <html lang={locale} suppressHydrationWarning>
            <body>
                <Providers>
                    <SelectionProvider>
                        <GlobalOverlays />
                        <main>{children}</main>
                    </SelectionProvider>
                </Providers>
            </body>
        </html>
    );
}
