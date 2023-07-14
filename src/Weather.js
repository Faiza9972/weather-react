import React, { useState } from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
const [weatherData, setweatherData]= useState({ready: false});

function handleResponse(response) {
setweatherData ({
  ready: true,
  city: response.data.name,
  temperature: response.data.main.temp,
  date: "Monday 10:00",
  descrtiption: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  icon: 'https://openweathermap.org/img/wn/01d@2x.png',

})
console.log(response.data);
}

if(weatherData.ready) {
return (
    <div>
      <form className="form">
        <div className="row">
          <div className="col-10">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control city-input-box"
                placeholder="Enter a city"
                autoFocus="on"
              />
              <button
                className="btn btn-outline-secondary search-btn"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <FormattedDate date={weatherData.date}/>
        <li>Last update:</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={weatherData.icon}
              alt="Clear"
            />
            <div>
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
} else {
  const apiKey="e450bc345a80a08ada69fd5c714d871d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading...";
}
}