const weatherAPI = require("../api/openWeatherAPI");

exports.getCurrentWeather = async (req, res) => {
  try {
    const city = req.params.city;
    const weatherData = await weatherAPI.fetchCurrentWeather(city);

    const formattedWeatherData = {
      name: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      coordinates: weatherData.coord,
      feels_like: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      wind_speed: weatherData.wind.speed,
      country_code: weatherData.sys.country,
      rain_volume: weatherData.rain && weatherData.rain['3h'] ? weatherData.rain['3h'] : 0,
    };

    res.json(formattedWeatherData);
  } catch (error) {
    console.error("Error fetching current weather: ", error.message);
    res.status(500).send("Error fetching current weather data.");
  }
};
exports.getWeatherForecast = async (req, res) => {
  try {
    const city = req.params.city;
    const forecastData = await weatherAPI.fetchWeatherForecast(city);
    console.log(city)

    const formattedForecastData = forecastData.list.map((day) => ({
      date: day.dt,
      sunrise: day.sunrise,
      sunset: day.sunset,
      max_temperature: day.temp.max,
      min_temperature: day.temp.min,
      feels_like_day: day.feels_like.day,
      wind_direction: day.deg,
    }));

    res.json(formattedForecastData);
  } catch (error) {
    console.error("Error fetching weather forecast: ", error.message);
    res.status(500).send("Error fetching weather forecast data.");
  }
};
