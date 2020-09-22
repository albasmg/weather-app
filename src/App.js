import React, { useEffect, useState } from 'react';
import { getLocation, getWeatherLocation } from './services/weather/api';
import { mapWeatherStatesToImages } from './utils';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import './assets/stylesheets/App.scss';

const App = () => {
  const [locationWeather, setLocationWeather] = useState({});
  const [isWeatherDataReady, setIsWeatherDataReady] = useState(false);

  useEffect(() => {
    getLocation('madrid').then((locationData) => {
      getWeatherLocation(locationData[0].woeid).then((weatherData) => {
        setLocationWeather(weatherData);
        setIsWeatherDataReady(true);
      });
    });
  }, []);

  const getLocationApi = (inputValue) =>
    getLocation(inputValue).then((locationData) => locationData);

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

  //TODO: create loading component
  if (!isWeatherDataReady) return 'Loading';

  return (
    <WeatherInfo
      temperature={getAverageTemperature()}
      state={locationWeather.consolidated_weather[0].weather_state_name}
      city={locationWeather.title}
      stateIcon={mapWeatherStatesToImages(
        locationWeather.consolidated_weather[0].weather_state_abbr
      )}
      onSearcherChange={getLocationApi}
    />
  );
};

export default App;
