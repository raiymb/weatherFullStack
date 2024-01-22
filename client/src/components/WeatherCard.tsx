import React from 'react';
import { CurrentWeather } from '../types/weatherTypes';
import WeatherMap from './WeatherMap';


interface WeatherCardProps {
  weatherData: CurrentWeather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-5">
        <h2 className="font-bold text-3xl mb-4 text-blue-600">Weather in {weatherData.name}</h2>
        <div className="grid grid-cols-2 gap-6 text-gray-700">
          <div className="space-y-2">
            <p>Temperature: <span className="font-semibold text-lg">{weatherData.temperature}°C</span></p>
            <p>Feels Like: <span className="font-semibold text-lg">{weatherData.feels_like}°C</span></p>
            <p>Humidity: <span className="font-semibold text-lg">{weatherData.humidity}%</span></p>
            <p>Pressure: <span className="font-semibold text-lg">{weatherData.pressure} hPa</span></p>
          </div>
          <div className="space-y-2">
            <p>Description: <span className="font-semibold text-lg">{weatherData.description}</span></p>
            <p>Wind Speed: <span className="font-semibold text-lg">{weatherData.wind_speed} km/h</span></p>
            <p>Country: <span className="font-semibold text-lg">{weatherData.country_code}</span></p>
            <p>Rain Volume: <span className="font-semibold text-lg">{weatherData.rain_volume} mm</span></p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-5">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-medium text-blue-600">Coordinates:</p>
            <p className="text-sm">Lat {weatherData.coordinates.lat}, Lon {weatherData.coordinates.lon}</p>
          </div>
          <div>
            <img className="w-12 h-12" src={`http://openweathermap.org/img/w/${weatherData.icon}.png`} alt="Weather Icon" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <WeatherMap coordinates={{ lat: weatherData.coordinates.lat, lon: weatherData.coordinates.lon }} />
      </div>
    </div>
  );
};

export default WeatherCard;