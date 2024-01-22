import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import CityInfoCard from "../components/CityInfoCard";
import NewsComponent from "../components/NewsComponent";
import { fetchCurrentWeather, fetchCityInfo, fetchNews } from "../services/WeatherService";
import { CurrentWeather, CityInfo, NewsData } from "../types/weatherTypes";
import logo from './images/webpage.png';

const CurrentWeatherPage: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);
  const [cityInfo, setCityInfo] = useState<CityInfo | null>(null);
  const [newsData, setNewsData] = useState<NewsData | null>(null);

  const handleSearch = async () => {
    try {
      const weather = await fetchCurrentWeather(city);
      const cityData = await fetchCityInfo(city);
      const news = await fetchNews(city);
      setWeatherData(weather);
      setCityInfo(cityData);
      setNewsData(news);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2"/> 
        <span className="font-bold text-xl">Derbes</span> 
      </div>
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

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          {cityInfo && <CityInfoCard cityInfo={cityInfo} />}
          {newsData && <NewsComponent news={newsData} />}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherPage;