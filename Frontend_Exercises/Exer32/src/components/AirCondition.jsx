import React from "react";

export default function AirCondition({currentWeather}) {
  return (
    <div className="hourly-container">
      <h5>AIR CONDITIONS</h5>
      <div className="air-condition-container">
        <div>
          <div className="air-temp">
            <span>
              <img
                src="https://img.icons8.com/color/25/dew-point.png"
                alt="thermometer"
              />
            </span>
            <div>
              <span>Real Feel</span>
              <h3>{currentWeather?.feels_like}°</h3>
            </div>
          </div>
          <div className="air-temp">
            <span>
              <img src="https://img.icons8.com/color/25/wind.png" alt="wind" />
            </span>
            <div>
              <span>Wind</span>
              <h3>{Math.floor(currentWeather.wind_speed*3.6)}km/h</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="air-temp">
            <span>
              <img src="https://img.icons8.com/color/25/blur.png" alt="rain" />
            </span>
            <div>
              <span>Chance of rain</span>
              <h3>{currentWeather.clouds}%</h3>
            </div>
          </div>
          <div className="air-temp">
            <span>
              <img src="https://img.icons8.com/color/25/sun--v1.png" alt="UV" />
            </span>
            <div>
              <span>UV Index</span>
              <h3>{currentWeather.uvi}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
