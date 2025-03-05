"use client";

import { ReactNode } from "react";
import { BeautiMapProvider } from "beautimap";

export const Provider = ({ children }: { children: ReactNode }) => {
  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
  if (!apiKey) throw new Error("MAPS_API_KEY is not set");
  return <BeautiMapProvider apiKey={apiKey}>{children}</BeautiMapProvider>;
};
