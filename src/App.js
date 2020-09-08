import React, { useEffect, useState } from 'react';
import { getLocation, getWeatherLocation } from './services/weather/api';
import './assets/stylesheets/App.css';

const App = () => {
  const [locationWeather, setLocationWeather] = useState({});

  useEffect(() => {
    getLocation('madrid').then((locationData) => {
      getWeatherLocation(locationData[0].woeid).then((weatherData) => {
        setLocationWeather(weatherData);
      });
    });
  }, []);

  return <h1>Hola mundo</h1>;
};

export default App;
