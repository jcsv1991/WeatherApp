// src/components/ForecastDisplay.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const ForecastDisplay = ({ forecast, units }) => {
  if (!forecast || forecast.length === 0) return null;

  const tempUnit = units === 'metric' ? '°C' : '°F';

  // Filter the data to pick entries around 12:00 PM (for daily summaries)
  const dailyForecast = forecast.filter(reading => reading.dt_txt.includes('12:00:00'));

  return (
    <Box mt={3} display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
      {dailyForecast.map((day, index) => (
        <Card key={index} sx={{ minWidth: 150, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h6">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </Typography>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="weather icon"
            />
            <Typography variant="body1">
              Temp: {day.main.temp}{tempUnit}
            </Typography>
            <Typography variant="body2">{day.weather[0].description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ForecastDisplay;
