import { useEffect, useState } from "react";
import "./App.css";
import AirCondition from "./components/AirCondition";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import WeeklyForcast from "./components/WeeklyForcast";
import axios from "axios";

function App() {
  const [search, setSearch] = useState();
  const [city, setCity] = useState("Delhi");
  const [lat, setLat] = useState(28.7041);
  const [long, setLong] = useState(77.1025);
  const [current, setCurrent] = useState({});
  const [hourly, setHourly] = useState({});
  const [daily, setDaily] = useState({});
  const weatherIcons = {
    "01d": "summer--v1",
    "02d": "partly-cloudy-day--v1",
    "03d": "clouds",
    "04d": "light-rain-2--v1",
    "09d": "light-rain--v1",
    "10d": "rain--v1",
    "11d": "chance-of-storm",
    "13d": "snow--v1",
    "50d": "partly-cloudy-rain--v1",
    "01n": "new-moon",
    "02n": "partly-cloudy-day--v1",
    "03n": "clouds",
    "04n": "light-rain-2--v1",
    "09n": "light-rain--v1",
    "10n": "rain--v1",
    "11n": "chance-of-storm",
    "13n": "snow--v1",
    "50n": "partly-cloudy-rain--v1",
  };

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=8320b5c07e576d80ed8d8cb87c15eb05`
      )
      .then((response) => {
        setLat(response.data[0].lat);
        setLong(response.data[0].lon);
      })
      .then(() => {
        axios
          .get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=metric&appid=8320b5c07e576d80ed8d8cb87c15eb05`
          )
          .then((response) => {
            console.log(response.data);
            setCurrent(response.data.current);
            setHourly(response.data.hourly);
            setDaily(response.data.daily);
          });
      });
  }, [city]);

  const handleSearchText = (e) => {
    setSearch(e.target.value);
  };

  //Fetching Data
  const handleSearch = () => {
    setCity(search);
  };

  return (
    <>
      <div className="container roboto">
        <div className="middle-container">
          <div className="search-bar-container">
            <input
              onChange={handleSearchText}
              className="search-bar"
              placeholder="Search for cities"
              type="text"
            />
            <button onClick={handleSearch} className="search-button">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <Current
            city={city}
            currentWeather={current}
            weatherIcons={weatherIcons}
          />
          <Hourly hourlyWeather={hourly} weatherIcons={weatherIcons} />
          <AirCondition currentWeather={current} />
        </div>
        <div>
          <WeeklyForcast weeklyWeather={daily} weatherIcons={weatherIcons} />
        </div>
      </div>
    </>
  );
}

export default App;
