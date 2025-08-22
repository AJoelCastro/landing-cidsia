"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface UbicacionMapaProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  height?: string;
  width?: string;
}

const UbicacionMapa: React.FC<UbicacionMapaProps> = ({
  lat = -12.0464, // Lima, Perú por defecto
  lng = -77.0428,
  zoom = 15,
  height = "350px",
  width = "100%",
}) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  const center = { lat, lng };

  return (
    <div style={{ width, height, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 16px #0002", margin: "32px auto" }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={zoom}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFD27A", fontWeight: 600 }}>
          Cargando mapa...
        </div>
      )}
    </div>
  );
};

export default UbicacionMapa;
