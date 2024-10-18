// src/components/HourlyForecast.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const HourlyForecast = ({ hourly, units }) => {
  if (!hourly || hourly.length === 0) return null;

  // Extract the next 8 intervals (each representing a 3-hour period)
  const next24Hours = hourly.slice(0, 8);
  const tempUnit = units === 'metric' ? '°C' : '°F';

  return (
    <Box mt={3} display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
      {next24Hours.map((hourData, index) => (
        <Card key={index} sx={{ minWidth: 150, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h6">
              {new Date(hourData.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Typography>
            <img
              src={`http://openweathermap.org/img/wn/${hourData.weather[0].icon}.png`}
              alt="weather icon"
            />
            <Typography variant="body1">
              Temp: {hourData.main.temp}{tempUnit}
            </Typography>
            <Typography variant="body2">{hourData.weather[0].description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default HourlyForecast;
