"use client";

import { Inter } from "next/font/google";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const inter = Inter({ subsets: ["latin"] });

export default function CustomThemeController({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useQuery(api.theme.get);

  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
