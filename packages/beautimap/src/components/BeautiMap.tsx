import { useMemo } from "react";
import { GoogleMap, GoogleMapProps } from "@react-google-maps/api";

import { cn } from "../lib/utils";
import { Fuse, WY } from "../themes";

const DEFAULT_CENTER = { lat: 25.080999, lng: 121.5204779 };
const DEFAULT_ZOOM = 10;

export interface BeautiMapProps
  extends Omit<GoogleMapProps, "mapContainerClassName" | "mapContainerStyle"> {
  className?: string;
  theme?: "light" | "dark";
}

export const BeautiMap = ({
  className,
  options,
  theme = "light",
  children,
  ...props
}: BeautiMapProps) => {
  const mapOptions = useMemo(
    () => ({
      styles: theme === "dark" ? Fuse : WY,
      disableDefaultUI: true,
      ...options,
    }),
    [theme, options]
  );

  return (
    <GoogleMap
      mapContainerClassName={cn(
        "w-full h-full rounded-lg shadow-lg",
        className
      )}
      zoom={DEFAULT_ZOOM}
      center={DEFAULT_CENTER}
      options={mapOptions}
      onLoad={() => console.log("Map Loaded")}
      {...props}
    >
      {children}
    </GoogleMap>
  );
};
