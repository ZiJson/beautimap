"use client";

import { BeautiMap, Marker, MarkerClusterer } from "beautimap";
import { useTheme } from "next-themes";

const MyMap = () => {
  const { theme } = useTheme();

  return (
    <BeautiMap
      center={{ lat: 25.0803999, lng: 121.5204779 }}
      className="mx-auto aspect-video h-[40vh] w-auto"
      theme={theme as "light" | "dark"}
    >
      <MarkerClusterer>
        <Marker position={{ lat: 25.080999, lng: 121.5204779 }}>
          <div className="rounded-full bg-amber-600 p-2" />
        </Marker>
        <Marker position={{ lat: 25.0801, lng: 121.5204779 }} />
      </MarkerClusterer>
    </BeautiMap>
  );
};

export default MyMap;
