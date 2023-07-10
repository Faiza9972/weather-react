import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div>
      <h1>Athens</h1>
      <ul>
        <li>Last update:</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="Clear"
            />
            <div>
              <strong>30</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: %</li>
            <li>Wind: km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
