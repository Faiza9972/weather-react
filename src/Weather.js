import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Weather(props) {
const [weatherData, setweatherData]= useState({ready: false});

function handleResponse(response) {
setweatherData ({
  ready: true,
  city: response.data.name,
  temperature: response.data.main.temp,
  date: new Date(response.data.dt * 1000),
  descrtiption: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  icon: 'https://openweathermap.org/img/wn/01d@2x.png',

})
//console.log(response.data);
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
      <WeatherInfo info={weatherData}/>
      
    </div>
  );
} else {
  const apiKey="e450bc345a80a08ada69fd5c714d871d";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading...";
}
}