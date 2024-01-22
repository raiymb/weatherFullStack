import React, { useState } from 'react';
import ExtendedForecastCard from '../components/ExtendedForecastCard';
import { fetchExtendedWeatherForecast } from '../services/WeatherService';
import { DayForecast } from '../types/weatherTypes';

const ExtendedForecastPage: React.FC = () => {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState<DayForecast[]>([]);

  const handleSearch = async () => {
    try {
      const data = await fetchExtendedWeatherForecast(city);
      setForecastData(data);
    } catch (error) {
      console.error('Error fetching extended weather forecast:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <input
            className="flex-1 p-2 border border-gray-300 rounded-lg mb-4 md:mb-0"
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 transition-colors"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {forecastData.map(day => (
          <ExtendedForecastCard key={day.date} dayForecast={day} />
        ))}
      </div>
    </div>
  );
};

export default ExtendedForecastPage;