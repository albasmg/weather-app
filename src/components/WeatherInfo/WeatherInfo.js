import React from 'react';

const WeatherInfo = ({ temperature }) => {
  return (
    <div>
      <h1>{temperature}</h1>
      <span>Shower</span>
      <span>Location</span>
    </div>
  );
};

export default WeatherInfo;
