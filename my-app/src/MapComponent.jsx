// src/components/MapComponent.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapComponent.module.css"; // custom CSS

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapComponent() {
  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={[20.5937, 78.9629]} // Center on India
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
      >
        {/* Base map tiles */}
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, NASA, USGS"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {/* Example marker */}
        <Marker position={[28.6139, 77.209]}>
          <Popup>📍 New Delhi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
