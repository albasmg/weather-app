import React from 'react';
import background from '../../assets/images/Cloud-background.png';

const WeatherInfo = ({ temperature, state, city, stateIcon }) => {
  return (
    <aside className="weatherInfo">
      <div>
        <button className="weatherInfo__searchBtn">Search for places</button>
      </div>
      <div className="weatherInfo__stateIcon">
        <img
          src={background}
          alt="background"
          className="weatherInfo__stateIconBackground"
        ></img>
        <div className="weatherInfo__imgContainer">
          <img src={stateIcon} alt={state} className="weatherInfo__img"></img>
        </div>
      </div>
      <h1 className="weatherInfo__temperature">{temperature}</h1>
      <span className="weatherInfo__state">{state}</span>
      <div className="weatherInfo__dateContainer">
        <span>Today</span>
        <span>Date</span>
      </div>
      <span className="weatherInfo__location">{city}</span>
    </aside>
  );
};

export default WeatherInfo;
