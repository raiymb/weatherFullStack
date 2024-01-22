import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Coordinates {
  lat: number;
  lon: number;
}

interface WeatherMapProps {
  coordinates: Coordinates;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ coordinates }) => {
  const [mapKey, setMapKey] = useState(Math.random());

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
      <Marker position={[coordinates.lat, coordinates.lon]} />
    </MapContainer>
  );
};

export default WeatherMap;