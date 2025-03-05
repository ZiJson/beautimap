"use client";

import Link from "next/link";
import { BeautiMap, Marker, MarkerClusterer } from "beautimap";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-1 flex-col justify-center gap-3 text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
      <BeautiMap
        center={{ lat: 25.0803999, lng: 121.5204779 }}
        className="mx-auto aspect-video h-[40vh] w-auto"
        theme={theme as "light" | "dark"}
      >
        <MarkerClusterer>
          <Marker position={{ lat: 25.080999, lng: 121.5204779 }}>
            {/* <div className="rounded-full border-2 border-red-300 bg-white p-2 text-center shadow-xl"></div> */}
          </Marker>
          <Marker position={{ lat: 25.0801, lng: 121.5204779 }}>
            {/* <div className="rounded-full border-2 border-red-300 bg-white p-2 text-center shadow-xl"></div> */}
          </Marker>
        </MarkerClusterer>
      </BeautiMap>
    </main>
  );
}
