import type { Metadata } from 'next';

import './globals.css';
import { ConvexClientProvider } from './_providers/ConvexClientProvider';
import CustomThemeController from './_providers/CustomThemeController';

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
      <CustomThemeController>{children}</CustomThemeController>
    </ConvexClientProvider>
  );
}
