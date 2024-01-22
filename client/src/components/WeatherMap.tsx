import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerImage from './images/leafletMapMarker.png'

interface Coordinates {
  lat: number;
  lon: number;
}

interface WeatherMapProps {
  coordinates: Coordinates;
}


const WeatherMap: React.FC<WeatherMapProps> = ({ coordinates }) => {
  const [mapKey, setMapKey] = useState(Math.random());

  const customIcon = new L.Icon({
    iconUrl: markerImage, 
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
  });

  useEffect(() => {
    setMapKey(Math.random());
  }, [coordinates]);

  return (
    <MapContainer 
      key={mapKey}
      center={[coordinates.lat, coordinates.lon]} 
      zoom={13} 
      scrollWheelZoom={false} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.lat, coordinates.lon]} icon={customIcon}/>
    </MapContainer>
  );
};

export default WeatherMap;