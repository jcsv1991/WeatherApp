
# Weather Forecasting App

A dynamic and visually appealing weather forecasting application built with React that uses the OpenWeatherMap API to display current, 5-day, and 24-hour forecasts.
**Important: This project requires you to use the fullyfunctionalextrafeatures branch to get all the advanced functionality like switching between 5-day and 24-hour forecasts.**

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [External Libraries](#external-libraries)
- [API Integration](#api-integration)
- [Contributing](#contributing)


## Features
- Search for any city in the world and get weather data.
- Display current weather conditions with temperature and description.
- Toggle between Celsius and Fahrenheit.
- Switch between a 24-hour forecast and a 5-day forecast.
- Visuals include icons for various weather conditions.
- Responsive design to work well on various screen sizes.

## Technologies Used
- **React.js**: A JavaScript library for building user interfaces.
- **Material UI**: React components for faster and easier web development.
- **Axios**: Promise-based HTTP client for API requests.
- **OpenWeatherMap API**: Provides weather data such as current weather, 5-day forecast, and hourly forecast.

## Project Structure

bash
├── public
│   └── index.html
├── src
│   ├── api
│   │   └── weatherApi.js        # API calls using Axios
│   ├── components
│   │   ├── Weather.js           # Main component handling the state and layout
│   │   ├── WeatherDisplay.js    # Displays current weather data
│   │   ├── ForecastDisplay.js   # Displays 5-day forecast
│   │   ├── HourlyForecast.js    # Displays 24-hour forecast
│   │   ├── SearchBar.js         # Search bar with autocomplete for cities
│   │   ├── ErrorHandling.js     # Displays error messages
│   │   └── Loader.js            # Loading spinner while fetching data
│   ├── App.js                   # Root app component
│   ├── App.css                  # General styles
│   ├── index.js                 # Entry point for React app
│   └── index.css                # General styles
├── .github
│   └── workflows
│       └── ci.yml               # CI/CD pipeline using GitHub Actions
└── package.json                 # Project dependencies and scripts





## Code Organization

src/api/weatherApi.js: Contains all the API requests to OpenWeatherMap using Axios. This centralizes the API logic for easier maintainability.

src/components/Weather.js: Main component that manages the state, including the selected city, country, temperature units (Celsius/Fahrenheit), and forecast type (24-hour/5-day). This component passes the relevant data to child components like WeatherDisplay, ForecastDisplay, and HourlyForecast.

src/components/WeatherDisplay.js: Displays the current weather conditions such as temperature, city name, and weather description. It is wrapped in a Material-UI Card for a visually pleasing UI.

src/components/ForecastDisplay.js: Displays the 5-day weather forecast. Each forecast card contains the temperature and weather icons.

src/components/HourlyForecast.js: Displays the next 24 hours of weather data in a horizontal, scrollable format.

src/components/SearchBar.js: Search bar component that uses Material-UI's Autocomplete component and OpenWeatherMap's geocoding API for city suggestions.

src/components/ErrorHandling.js: Handles error messages displayed when issues occur during API requests.

src/components/Loader.js: Displays a loading spinner while weather data is being fetched.

## Setup Instructions

### Prerequisites

Node.js: Make sure you have Node.js installed (version 14 or higher).

npm: npm is installed by default with Node.js. If not, install it using:

npm install -g npm



### Installation

Important: This project requires you to use the fullyfunctionalextrafeatures branch to get all the advanced functionality like switching between 5-day and 24-hour forecasts.

Clone the repository and switch to the fullyfunctionalextrafeatures branch:

git clone https://github.com/your-username/weather-app.git
cd weather-app
git checkout fullyfunctionalextrafeatures


### Install the dependencies:

npm install


Run the app:

npm start

The app will start at http://localhost:3000.



## Usage

Search for a city: Use the search bar to type a city name.

Toggle between Celsius and Fahrenheit: Switch the units using the buttons below the search bar.

Toggle between 24-hour and 5-day forecast: Switch between forecast views using the buttons provided.

## External Libraries

Here are the key external libraries used in this project:

React: A JavaScript library for building component-based user interfaces.React Documentation

Material-UI: A popular UI framework for React to style the app.Material-UI Documentation

Axios: Used to make HTTP requests to fetch weather data from the OpenWeatherMap API.Axios Documentation

OpenWeatherMap API: Provides weather data like temperature, forecast, and weather conditions.OpenWeatherMap Documentation



## API Integration

This app integrates with the OpenWeatherMap API to fetch weather data. It uses the following endpoints:

Geocoding API: To get latitude and longitude based on the city input.

Weather Data API: To get current weather, 5-day forecasts, and 24-hour forecasts for a given city.

Make sure you have a valid OpenWeatherMap API key, which can be obtained by signing up at OpenWeatherMap. 

## Contributing

Fork the repository.

Create a new branch:

git checkout -b feature-branch

Make your changes.

Commit and push your changes:

git push origin feature-branch

Submit a pull request.

fix all this to make it into markdown
