import React from "react";

export default function WeeklyForcast({weeklyWeather, weatherIcons}) {
  return (
    <div className="weeklyforecast-container">
      <h5>7-DAY FORECAST</h5>

      <div className="dayswise-forcast">
        <div className="forcast-d">
          <p>Today</p>
          <div>
            <img src={`https://img.icons8.com/color/60/${weatherIcons[weeklyWeather[0]?.weather.at(0).icon]}.png`} alt="sunny" />
            <p className="weekly-day">{weeklyWeather[0]?.weather.at(0).main}</p>
          </div>
          <p className="weekly-temp">
            {Math.floor(weeklyWeather[0]?.temp.max)}<span className="weekly-some">/{Math.floor(weeklyWeather[0]?.temp.min)}</span>
          </p>
        </div>
        <div className="weekly-divider">
        </div>

        <div className="forcast-d">
          <p>Tue</p>
          <div>
            <img src={`https://img.icons8.com/color/60/${weatherIcons[weeklyWeather[1]?.weather.at(0).icon]}.png`} alt="haze" />
            <p className="weekly-day">{weeklyWeather[1]?.weather.at(0).main}</p>
          </div>
          <p className="weekly-temp">
          {Math.floor(weeklyWeather[1]?.temp.max)}<span className="weekly-some">/{Math.floor(weeklyWeather[1]?.temp.min)}</span>
          </p>
        </div>
        <div className="weekly-divider">
        </div>

        <div className="forcast-d">
          <p>Wed</p>
          <div>
            <img src={`https://img.icons8.com/color/60/${weatherIcons[weeklyWeather[2]?.weather.at(0).icon]}.png`} alt="cloudy" />
            <p className="weekly-day">{weeklyWeather[2]?.weather.at(0).main}</p>
          </div>
          <p className="weekly-temp">
          {Math.floor(weeklyWeather[2]?.temp.max)}<span className="weekly-some">/{Math.floor(weeklyWeather[2]?.temp.min)}</span>
          </p>
        </div>
        <div className="weekly-divider">
        </div>

        <div className="forcast-d">
          <p>Thu</p>
          <div>
            <img src={`https://img.icons8.com/color/60/${weatherIcons[weeklyWeather[3]?.weather.at(0).icon]}.png`} alt="rainy" />
            <p className="weekly-day">{weeklyWeather[3]?.weather.at(0).main}</p>
          </div>
          <p className="weekly-temp">
          {Math.floor(weeklyWeather[3]?.temp.max)}<span className="weekly-some">/{Math.floor(weeklyWeather[3]?.temp.min)}</span>
          </p>
        </div>
        <div className="weekly-divider">
        </div>

        <div className="forcast-d">
          <p>Fri</p>
          <div>
            <img src={`https://img.icons8.com/color/60/${weatherIcons[weeklyWeather[4]?.weather.at(0).icon]}.png`} alt="stormy" />
            <p className="weekly-day">{weeklyWeather[4]?.weather.at(0).main}</p>
          </div>
          <p className="weekly-temp">
          {Math.floor(weeklyWeather[4]?.temp.max)}<span className="weekly-some">/{Math.floor(weeklyWeather[4]?.temp.min)}</span>
          </p>
        </div>
        <div className="weekly-divider">
        </div>

        <div className="forcast-d">
          <p>Sat</p>
          <div>
            <img src={`https://img.icons8.com/color/60/${weatherIcons[weeklyWeather[5]?.weather.at(0).icon]}.png`} alt="cloudy" />
            <p className="weekly-day">{weeklyWeather[5]?.weather.at(0).main}</p>
          </div>
          <p className="weekly-temp">
          {Math.floor(weeklyWeather[5]?.temp.max)}<span className="weekly-some">/{Math.floor(weeklyWeather[5]?.temp.min)}</span>
          </p>
        </div>
        <div className="weekly-divider">
        </div>

        <div className="forcast-d">
          <p>Sun</p>
          <div>
            <img src={`https://img.icons8.com/color/60/${weatherIcons[weeklyWeather[6]?.weather.at(0).icon]}.png`} alt="sunny" />
            <p className="weekly-day">{weeklyWeather[6]?.weather.at(0).main}</p>
          </div>
          <p className="weekly-temp">
          {Math.floor(weeklyWeather[6]?.temp.max)}<span className="weekly-some">/{Math.floor(weeklyWeather[6]?.temp.min)}</span>
          </p>
        </div>

      </div>
    </div>
  );
}
