// src/components/WeatherDisplay.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const WeatherDisplay = ({ weather, units }) => {
  if (!weather) return null;

  // Determine unit label (°C or °F)
  const tempUnit = units === 'metric' ? '°C' : '°F';

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Card sx={{ minWidth: 275, padding: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {weather.name}, {weather.sys.country}
          </Typography>
          <Typography variant="h6">{weather.weather[0].description}</Typography>
          <Typography variant="h5">
            Temperature: {weather.main.temp}{tempUnit}
          </Typography>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherDisplay;
