"use client";
import { World } from "./Globe";

// Sample data for the globe arcs with WeAdvance Sky Blue color
const sampleArcs = [
  {
    order: 1,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
  color: "#00b5c8",   
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.1,
   color: "#00b5c8",   
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: "#00b5c8",   
  },
];

// Globe configuration matching the WeAdvance Navy/Blue theme
const globeConfig = {
  pointSize: 4,
  globeColor: "#080e20", // Deep Navy
  showAtmosphere: true,
  atmosphereColor: "#00b5c8", // WeAdvance Teal
  atmosphereAltitude: 0.1,
  emissive: "#020408", // Dark Navy
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(56, 152, 236, 0.4)", // Translucent Sky Blue
  ambientLight: "#00b5c8", 
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};


const GridGlobe = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="rounded-full border-2 border-cyan-500 opacity-40"
        style={{
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle at 30% 30%, #00b5c8, #080e20)",
          boxShadow: "0 0 60px #00b5c833",
        }}
      />
    </div>
  );
};

export default GridGlobe;