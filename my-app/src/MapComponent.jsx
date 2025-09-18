import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  GeoJSON,
  useMap,
  useMapEvents
} from "react-leaflet";
import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./MapComponent.module.css"; // custom CSS

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// ✅ Fix default Leaflet marker in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// 🔹 Sample GeoJSON for forests
const forestsGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Forest A" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.2, 28.61],
            [77.21, 28.61],
            [77.21, 28.62],
            [77.2, 28.62],
            [77.2, 28.61],
          ],
        ],
      },
    },
  ],
};

// 🔹 Sample GeoJSON for ponds
const pondsGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Pond X" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.22, 28.61],
            [77.225, 28.61],
            [77.225, 28.615],
            [77.22, 28.615],
            [77.22, 28.61],
          ],
        ],
      },
    },
  ],
};

// 🔹 Component to move map smoothly when location changes
function FlyToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 16); // zoom = 16
    }
  }, [position, map]);

  return null;
}

export default function MapComponent() {
  const [position, setPosition] = useState(null);

  // Function: Get current location
  const goToCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          alert("Please allow location access in browser settings.");
        } else {
          console.error(err);
        }
      },
      { enableHighAccuracy: true }
    );
  };

  function LocationOnClick({ setPosition }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]); // update state on click
    },
  });
  return null;
}

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>

      <MapContainer
        center={[20.5937, 78.9629]} // India center
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
      >

        <LocationOnClick setPosition={setPosition} />

        <LayersControl position="topright">
          {/* Base Map */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri"
          />

          {/* Forest overlay */}
          <LayersControl.Overlay name="Forests">
            <GeoJSON
              data={forestsGeoJson}
              style={{ color: "green", fillColor: "green", fillOpacity: 0.4 }}
            />
          </LayersControl.Overlay>

          {/* Pond overlay */}
          <LayersControl.Overlay name="Ponds">
            <GeoJSON
              data={pondsGeoJson}
              style={{ color: "blue", fillColor: "blue", fillOpacity: 0.4 }}
            />
          </LayersControl.Overlay>
        </LayersControl>

        {/* ✅ Dynamic marker for current location */}
        {position && (
          <>
            <Marker position={position}>
              <Popup>You are here 📍</Popup>
            </Marker>
            <FlyToLocation position={position} />
          </>
        )}
      </MapContainer>

      {/* ✅ Floating button to get current location */}
      <button
        onClick={goToCurrentLocation}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          borderRadius: "50%",
          border: "none",
          background: "#1976d2",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          zIndex:999,
        }}
      >
        📍
      </button>
    </div>
  );
}
