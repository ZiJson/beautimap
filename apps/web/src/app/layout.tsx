import "./global.css";

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";

import { Provider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>
          <RootProvider>{children}</RootProvider>
        </Provider>
      </body>
    </html>
  );
}
