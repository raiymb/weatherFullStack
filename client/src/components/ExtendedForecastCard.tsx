import React from 'react';
import { DayForecast } from '../types/weatherTypes';

interface ExtendedForecastCardProps {
  dayForecast: DayForecast;
}

const ExtendedForecastCard: React.FC<ExtendedForecastCardProps> = ({ dayForecast }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="p-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <h3 className="font-bold text-2xl">{new Date(dayForecast.date * 1000).toDateString()}</h3>
      </div>
      <div className="p-5 grid grid-cols-2 gap-4 text-gray-700">
        <div>
          <p>Max Temp: <span className="font-semibold text-lg">{dayForecast.max_temperature}°C</span></p>
          <p>Min Temp: <span className="font-semibold text-lg">{dayForecast.min_temperature}°C</span></p>
        </div>
        <div>
          <p>Wind: <span className="font-semibold text-lg">{dayForecast.wind_direction}°</span></p>
          <p>Sunrise: <span className="font-semibold text-lg">{new Date(dayForecast.sunrise * 1000).toLocaleTimeString()}</span></p>
          <p>Sunset: <span className="font-semibold text-lg">{new Date(dayForecast.sunset * 1000).toLocaleTimeString()}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ExtendedForecastCard;