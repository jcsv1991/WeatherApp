// src/components/ForecastDisplay.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const ForecastDisplay = ({ forecast, units }) => {
  if (!forecast || !forecast.list) return null;

  // Determine unit label (°C or °F)
  const tempUnit = units === 'metric' ? '°C' : '°F';

  const forecastDays = forecast.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );

  return (
    <Box
      mt={3}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2} // Adds space between items
    >
      {forecastDays.map((day, index) => (
        <Card key={index} sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h6">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </Typography>
            <Typography variant="h6">{day.weather[0].description}</Typography>
            <Typography variant="body1">
              Temp: {day.main.temp}{tempUnit}
            </Typography>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="weather icon"
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ForecastDisplay;
