import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
const [city, setCity]= useState(props.defaultCity);
const [weatherData, setweatherData]= useState({ready: false});

function handleResponse(response) {
setweatherData ({
  ready: true,
  city: response.data.name,
  temperature: response.data.main.temp,
  date: new Date(response.data.dt * 1000),
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
})
//console.log(response.data);
}


function search() {
const apiKey="e450bc345a80a08ada69fd5c714d871d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
search();
}

function handleChange(event) {
setCity(event.target.value)
}


if(weatherData.ready) {
return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control city-input-box"
                placeholder="Enter a city"
                autoFocus="on"
                onChange = {handleChange}
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
      <WeatherInfo data={weatherData} />
      
    </div>
  );
} else {
search();
return "Loading...";
}
}