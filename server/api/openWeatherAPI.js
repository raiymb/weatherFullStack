const axios = require('axios');
const apiKey = process.env.WEATHER_API_TOKEN;

const fetchCurrentWeather = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    return response.data;
};

const fetchWeatherForecast = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${14}&appid=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
};

module.exports = {
    fetchCurrentWeather,
    fetchWeatherForecast,
};