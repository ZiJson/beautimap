// import React, { useEffect, useRef } from "react";
// import {
//   Marker as MapMarker,
//   OverlayView,
//   type MarkerProps as MapMarkerProps,
// } from "@react-google-maps/api";
// import { createRoot, Root } from "react-dom/client";

import { Marker } from "@react-google-maps/api";

// export interface MarkerProps extends MapMarkerProps {
//   children?: React.ReactNode;
// }

// export const Marker = ({ icon, children, ...props }: MarkerProps) => {
//   const markerRef = useRef<google.maps.Marker | null>(null);
//   const portalDiv = useRef<HTMLDivElement | null>(null);
//   const rootDiv = useRef<Root | null>(null);

//   useEffect(() => {
//     if (!children || !markerRef.current) return;

//     // Ensure portalDiv is created only once
//     if (!portalDiv.current) {
//       portalDiv.current = document.createElement("div");
//       portalDiv.current.style.position = "absolute";
//       portalDiv.current.style.transform = "translate(-50%, -50%)";
//     }

//     const map = markerRef.current.getMap();
//     if (map && portalDiv.current) {
//       const overlayView = new google.maps.OverlayView();

//       overlayView.onAdd = () => {
//         const panes = overlayView.getPanes();
//         if (panes) {
//           panes.overlayMouseTarget.appendChild(portalDiv.current!);
//         }
//       };

//       overlayView.draw = () => {
//         if (!markerRef.current || !portalDiv.current) return;
//         const position = markerRef.current.getPosition();
//         if (!position) return;

//         const projection = overlayView.getProjection();
//         if (projection && portalDiv.current) {
//           const point = projection.fromLatLngToDivPixel(position);
//           if (point) {
//             portalDiv.current.style.left = `${point.x}px`;
//             portalDiv.current.style.top = `${point.y}px`;
//           }
//         }
//       };

//       overlayView.onRemove = () => {
//         if (portalDiv.current?.parentNode) {
//           portalDiv.current.parentNode.removeChild(portalDiv.current);
//         }
//       };

//       overlayView.setMap(map);

//       if (!rootDiv.current) {
//         rootDiv.current = createRoot(portalDiv.current);
//       }

//       rootDiv.current.render(<>{children}</>);

//       return () => {
//         overlayView.setMap(null);
//       };
//     }
//   }, [children]);

//   const markerIcon: MapMarkerProps["icon"] = children
//     ? {
//         url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E",
//         scaledSize: new google.maps.Size(30, 30),
//       }
//     : icon;

//   return (
//     <MapMarker
//       {...props}
//       icon={markerIcon}
//       onLoad={(markerInstance) => {
//         markerRef.current = markerInstance;
//       }}
//     />
//   );
// };

export { Marker } from "@react-google-maps/api";
