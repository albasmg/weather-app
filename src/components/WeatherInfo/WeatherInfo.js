import React from 'react';

const WeatherInfo = ({ temperature }) => {
  return (
    <aside className="weatherInfo">
      <div>
        <buton className="weatherInfo__searchBtn">Search for places</buton>
      </div>
      <div className="weatherInfo__imgContainer">
        <img src="" alt="" className="weatherInfo__img"></img>
      </div>
      <h1 className="weatherInfo__temperature">{temperature}</h1>
      <span className="weatherInfo__state">Shower</span>
      <div className="weatherInfo__dateContainer">
        <span>Today</span>
        <span>Date</span>
      </div>
      <span className="weatherInfo__location">Location</span>
    </aside>
  );
};

export default WeatherInfo;
