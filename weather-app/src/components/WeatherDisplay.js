// src/components/WeatherDisplay.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const WeatherDisplay = ({ weather, city, countryCode, units }) => {
  if (!weather) return null;

  const tempUnit = units === 'metric' ? '°C' : '°F';

  return (
    <Box mt={3} textAlign="center">
      <Typography variant="h4">
        {city}, {countryCode}
      </Typography>
      <Typography variant="h6">{weather.weather[0].description}</Typography>
      <Typography variant="h5">
        Temperature: {weather.main.temp}{tempUnit}
      </Typography>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="weather icon"
      />
    </Box>
  );
};

export default WeatherDisplay;
