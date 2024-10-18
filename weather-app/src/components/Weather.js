// src/components/Weather.js
import React, { useState, useEffect, useCallback } from 'react';
import { getWeather } from '../api/weatherApi';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Loader from './Loader';
import ErrorHandling from './ErrorHandling';
import ForecastDisplay from './ForecastDisplay';
import { Fade, ButtonGroup, Button, Box } from '@mui/material';

const Weather = () => {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [units, setUnits] = useState('metric'); // metric for Celsius, imperial for Fahrenheit

  const fetchWeather = useCallback(async () => {
    // Don't fetch weather if city or countryCode is empty
    if (!city || !countryCode) {
      setError('Please select a valid location.');
      return;
    }

    setLoading(true);
    setError(''); // Reset error before making the API call
    const data = await getWeather(city, countryCode, units); // Pass countryCode
    if (data) {
      setWeatherData(data);
      setError(''); // Clear the error after successful fetch
    } else {
      setError('Unable to fetch weather data. Please try again.');
    }
    setLoading(false);
  }, [city, countryCode, units]);

  // Now include 'city' and 'countryCode' in the dependency array to fix the warning
  useEffect(() => {
    if (city && countryCode) {
      fetchWeather(); // Fetch weather for the default city on mount if both city and country are present
    }
  }, [city, countryCode, fetchWeather]);

  const handleUnitChange = (newUnit) => {
    setUnits(newUnit);
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <SearchBar setCity={setCity} setCountryCode={setCountryCode} fetchWeather={fetchWeather} setError={setError} />
      <Box mt={2}>
        <ButtonGroup>
          <Button onClick={() => handleUnitChange('metric')} variant={units === 'metric' ? 'contained' : 'outlined'}>
            Celsius
          </Button>
          <Button onClick={() => handleUnitChange('imperial')} variant={units === 'imperial' ? 'contained' : 'outlined'}>
            Fahrenheit
          </Button>
        </ButtonGroup>
      </Box>
      <ErrorHandling error={error} />
      {loading ? (
        <Loader />
      ) : (
        <Fade in={!loading} timeout={1000}>
          <div>
            <WeatherDisplay weather={weatherData?.current} units={units} />
            <ForecastDisplay forecast={weatherData?.forecast} units={units} />
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Weather;
