export interface CurrentWeather {
    temperature: number;
    name: string;
    description: string;
    icon: string;
    coordinates: {
      lat: number;
      lon: number;
    };
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    country_code: string;
    rain_volume: number;
  }
  
  export interface DayForecast {
    date: number;
    max_temperature: number;
    min_temperature: number;
    wind_direction: number;
    sunrise: number;
    sunset: number;
  }

  export interface CityInfo {
    title: string;
    extract: string;
  }
  
  export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    image: string;
  }
  
  export interface NewsData {
    articles: NewsArticle[];
  }