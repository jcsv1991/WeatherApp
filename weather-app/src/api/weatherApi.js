
// src/api/weatherApi.js
import axios from 'axios';

const API_KEY = '9c254e7ed6ff0c89bf7252f6068a5bd2'; // Replace with your actual API key
const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeather = async (city, countryCode, units = 'metric') => {
    try {
      // Include both city and country code in the query
      const query = countryCode ? `${city},${countryCode}` : city;
  
      const currentWeatherResponse = await axios.get(
        `${CURRENT_WEATHER_URL}?q=${query}&appid=${API_KEY}&units=${units}`
      );
      const forecastResponse = await axios.get(
        `${FORECAST_URL}?q=${query}&appid=${API_KEY}&units=${units}`
      );
  
      return {
        current: currentWeatherResponse.data,
        forecast: forecastResponse.data,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };