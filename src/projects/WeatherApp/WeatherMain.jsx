import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./Weather";

const WeatherMain = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const uriEncodedCity = encodeURIComponent(city);

  const fetchData = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      });
  };

  const fetchCityData = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/weather/?q=${uriEncodedCity}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (lat && long) {
      fetchData();
    }
  }, [lat, long]);

  useEffect(() => {
    if (city) {
      fetchCityData();
    }
  }, [city]);

  return (
    <div className="weatherApp">
      <input
        type="text"
        placeholder="Enter City"
        maxLength="50"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="weather_input"
      />

      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WeatherMain;
