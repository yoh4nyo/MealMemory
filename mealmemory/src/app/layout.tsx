import type { Metadata } from "next";

import { AppShell } from "@/components/layout/app-shell";

import "./globals.css";

export const metadata: Metadata = {
  title: "MealMemory",
  description: "Souvenez-vous des repas en famille et trouvez quoi cuisiner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full bg-[#fbf9f8] text-[#1b1c1c]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
