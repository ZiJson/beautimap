import { useMemo, useRef } from "react";
import {
  Circle,
  GoogleMap,
  GoogleMapProps,
  Marker,
  MarkerClusterer,
  MarkerF,
  OverlayView,
  StandaloneSearchBox,
} from "@react-google-maps/api";

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
  const ref = useRef<google.maps.places.SearchBox | null>(null);
  const mapOptions = useMemo(
    () => ({
      styles: theme === "dark" ? Fuse : WY,
      // disableDefaultUI: true,
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
      <StandaloneSearchBox
        onLoad={(reff) => (ref.current = reff)}
        onPlacesChanged={() => console.log(ref.current?.getPlaces())}
      >
        <input
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            marginLeft: "-120px",
          }}
        />
      </StandaloneSearchBox>
    </GoogleMap>
  );
};
