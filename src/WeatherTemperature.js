import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-temperature">
      <span className="temperature">
        <strong>{Math.round(props.celsius)}</strong>
      </span>
      <span className="units">°C </span>
    </div>
  );
}