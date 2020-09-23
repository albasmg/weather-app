import React, { useEffect, useState } from 'react';
import { getLocation, getWeatherLocation } from './services/weather/api';
import { mapWeatherStatesToImages } from './utils';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import WeatherExtraInfo from './components/WeatherExtraInfo/WeatherExtraInfo';

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

  const getWeatherLocationApi = (selected) => {
    setIsWeatherDataReady(false);
    getWeatherLocation(selected.value).then((weatherData) => {
      setLocationWeather(weatherData);
      setIsWeatherDataReady(true);
    });
  };

  const roundTemperature = () => {
    return parseInt(locationWeather.consolidated_weather[0].the_temp);
  };

  //TODO: create loading component
  if (!isWeatherDataReady) return 'Loading';

  return (
    <main className="main">
      <WeatherInfo
        temperature={roundTemperature()}
        state={locationWeather.consolidated_weather[0].weather_state_name}
        city={locationWeather.title}
        stateIcon={mapWeatherStatesToImages(
          locationWeather.consolidated_weather[0].weather_state_abbr
        )}
        onSearcherChange={getLocationApi}
        onSearcherSelect={getWeatherLocationApi}
      />
      <WeatherExtraInfo />
    </main>
  );
};

export default App;
