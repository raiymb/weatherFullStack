import axios from 'axios';
import { CurrentWeather, DayForecast,CityInfo, NewsData } from '../types/weatherTypes';

const BASE_URL = 'http://localhost:3000/api/weather';
const CITY_INFO_BASE_URL = 'http://localhost:3000';

const NEWS_URL = 'http://localhost:3000'; 

export const fetchCurrentWeather = async (city: string): Promise<CurrentWeather> => {
  const response = await axios.get<CurrentWeather>(`${BASE_URL}/current/${city}`);
  return response.data;
};

export const fetchExtendedWeatherForecast = async (city: string): Promise<DayForecast[]> => {
  const response = await axios.get<{ list: DayForecast[] }>(`${BASE_URL}/forecast/${city}`);
  return response.data.list;
};

export const fetchCityInfo = async (city: string): Promise<CityInfo> => { 
  if (!city.trim()) {
    throw new Error('City name is required');
  }

  try {
    const response = await axios.get(`${CITY_INFO_BASE_URL}/${city}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching city info:', error);
    throw error;
  }
};

export const fetchNewsFromBackend = async (query: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/news/${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};


export const fetchNews = async (query: string): Promise<NewsData> => {
  try {
    const response = await axios.get<NewsData>(`${NEWS_URL}/news/${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};