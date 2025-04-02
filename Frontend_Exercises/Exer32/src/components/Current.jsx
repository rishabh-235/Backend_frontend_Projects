import React from "react";

export default function Current({city, currentWeather, weatherIcons}) {

  return (
    <div className="current-container">
      <div className="city-temp">
        <div>
          <h1 className="city-name">{city}</h1>
          <p className="weather-prediction">Chance of rain: {currentWeather.clouds}%</p>
        </div>
        <div>
          <h1 className="temperature">{currentWeather.temp}°</h1>
        </div>
      </div>
      <div>
        <img
          src={`https://img.icons8.com/color/140/${weatherIcons[currentWeather.weather?.at(0).icon]}.png`}
          alt="sunny"
        />
      </div>
    </div>
  );
}
