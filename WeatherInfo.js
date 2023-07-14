import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {

reeturn (
<div> <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date}/>
        <li>Last update:</li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={props.data.icon}
              alt="Clear"
            />
            <div>
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <hr /></div>
);
}