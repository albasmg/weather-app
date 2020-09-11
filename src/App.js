import React, { useEffect, useState } from 'react';
import { getLocation, getWeatherLocation } from './services/weather/api';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import './assets/stylesheets/App.scss';

const App = () => {
  const [locationWeather, setLocationWeather] = useState({});

  useEffect(() => {
    getLocation('madrid').then((locationData) => {
      getWeatherLocation(locationData[0].woeid).then((weatherData) => {
        setLocationWeather(weatherData);
      });
    });
  }, []);

  const getAverageTemperature = () => {
    if (!Object.keys(locationWeather).length) return null;

    const totalTemperature = locationWeather.consolidated_weather.reduce(
      (totalTemperature, weatherInfo) =>
        totalTemperature + weatherInfo.the_temp,
      0
    );

    return parseInt(
      totalTemperature / locationWeather.consolidated_weather.length
    );
  };

  return <WeatherInfo temperature={getAverageTemperature()} />;
};

export default App;
