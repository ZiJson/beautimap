"use client";

import { LoadScript } from "@react-google-maps/api";

interface ProviderProps {
  apiKey: string;
  children: React.ReactNode;
}

export const BeautiMapProvider = ({ apiKey, children }: ProviderProps) => {
  return <LoadScript googleMapsApiKey={apiKey}>{children}</LoadScript>;
};
