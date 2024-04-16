import React from "react";
import "./weather.css";
import moment from "moment";

const Weather = ({ weatherData }) => {
  return (
    <div className="weather_main">
      <div className="weather_header">{weatherData.name}</div>
      <div className="flex">
        <p className="day">Day:{moment().format("dddd")}</p>
        <p className="day">Date:{moment().format("LL")}</p>
        <p className="day">Description:{weatherData.weather[0].description}</p>
      </div>
      <div className="flex">
        <p className="temp">Temperature:{weatherData.main.temp}</p>
        <p className="temp">Humidity:{weatherData.main.humidity}</p>
      </div>

      <div className="flex">
        <p className="weather_riseset">
          Sunrise:
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-In")}
        </p>
        <p className="weather_riseset">
          Sunset:
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-In")}
        </p>
      </div>
    </div>
  );
};

export default Weather;
