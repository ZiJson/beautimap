"use client";

import { ReactNode } from "react";
import { BeautiMapProvider } from "beautimap";

export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <BeautiMapProvider apiKey="AIzaSyDZUXsNVnMsgG-CbroEUyRlWmz9Zv7fwfg">
      {children}
    </BeautiMapProvider>
  );
};
