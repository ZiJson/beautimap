import "./global.css";

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { BeautiMapProvider } from "beautimap";
import { RootProvider } from "fumadocs-ui/provider";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
  if (!apiKey) throw new Error("MAPS_API_KEY is not set");
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <BeautiMapProvider apiKey={apiKey}>
          <RootProvider>{children}</RootProvider>
        </BeautiMapProvider>
      </body>
    </html>
  );
}
