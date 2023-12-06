import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConvexClientProvider } from './_providers/ConvexClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ContentQL',
  description: 'A SAAS to generate Modern Websites',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexClientProvider>
      <html lang='en' data-theme='night'>
        <body className={inter.className}>{children}</body>
      </html>
    </ConvexClientProvider>
  );
}
