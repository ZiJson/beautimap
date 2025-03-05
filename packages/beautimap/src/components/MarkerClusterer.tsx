import React, { Children, isValidElement } from "react";
import {
  MarkerClusterer as MapMarkerClusterer,
  MarkerProps,
  type MarkerClustererProps as MapMarkerClustererProps,
} from "@react-google-maps/api";

import { Marker } from "./Marker";

export interface MarkerClustererProps
  extends Omit<MapMarkerClustererProps, "children"> {
  children: React.ReactNode;
}

export const MarkerClusterer = ({
  children,
  ...props
}: MarkerClustererProps) => {
  console.log(children);
  return (
    <MapMarkerClusterer {...props}>
      {(clusterer) => (
        <>
          {Children.map(children, (child) => {
            console.log(child);
            if (
              isValidElement(child) &&
              (child.type === Marker || child.type === typeof Marker)
            ) {
              const markProps = child.props as MarkerProps;
              return (
                <Marker
                  key={JSON.stringify(markProps.position)}
                  clusterer={clusterer}
                  {...markProps}
                />
              );
            }
            return null; // 如果不是 Marker 组件，返回 null
          })}
        </>
      )}
    </MapMarkerClusterer>
  );
};
