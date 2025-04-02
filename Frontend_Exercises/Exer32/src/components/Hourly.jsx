import React, { useEffect, useState } from "react";

export default function Hourly({ hourlyWeather, weatherIcons }) {
  return (
    <div className="hourly-container">
      <h5>TODAY'S FORECAST</h5>
      <div className="weather-forcasting">
        <div>
          <p className="time">6:00 AM</p>
          <img
            src={`https://img.icons8.com/color/70/${
              weatherIcons[hourlyWeather[0]?.weather?.at(0)?.icon]
            }.png`}
            alt="cloudy"
          />
          <h3 className="hourly-temp">{Math.floor(hourlyWeather[0]?.temp)}°</h3>
        </div>
        <div className="hourly-divider"></div>
        <div>
          <p className="time">9:00 AM</p>
          <img
            src={`https://img.icons8.com/color/70/${
              weatherIcons[hourlyWeather[1]?.weather?.at(0)?.icon]
            }.png`}
            alt="haze"
          />
          <h3 className="hourly-temp">{Math.floor(hourlyWeather[1]?.temp)}°</h3>
        </div>
        <div className="hourly-divider"></div>
        <div>
          <p className="time">12:00 PM</p>
          <img
            src={`https://img.icons8.com/color/70/${
              weatherIcons[hourlyWeather[6]?.weather[0].icon]
            }.png`}
            alt="sunny"
          />
          <h3 className="hourly-temp">{Math.floor(hourlyWeather[6]?.temp)}°</h3>
        </div>
        <div className="hourly-divider"></div>
        <div>
          <p className="time">3:00 PM</p>
          <img
            src={`https://img.icons8.com/color/70/${
              weatherIcons[hourlyWeather[7]?.weather?.at(0)?.icon]
            }.png`}
            alt="rainy"
          />
          <h3 className="hourly-temp">{Math.floor(hourlyWeather[7]?.temp)}°</h3>
        </div>
        <div className="hourly-divider"></div>
        <div>
          <p className="time">6:00 PM</p>
          <img
            src={`https://img.icons8.com/color/70/${
              weatherIcons[hourlyWeather[12]?.weather[0].icon]
            }.png`}
            alt="stormy"
          />
          <h3 className="hourly-temp">
            {Math.floor(hourlyWeather[12]?.temp)}°
          </h3>
        </div>
        <div className="hourly-divider"></div>
        <div>
          <p className="time">9:00 PM</p>
          <img
            src={`https://img.icons8.com/color/70/${
              weatherIcons[hourlyWeather[22]?.weather[0].icon]
            }.png`}
            alt="cloudy"
          />
          <h3 className="hourly-temp">
            {Math.floor(hourlyWeather[22]?.temp)}°
          </h3>
        </div>
      </div>
    </div>
  );
}
