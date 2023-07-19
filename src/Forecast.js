import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Forecast.css";
import "./App.css";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
setLoaded(false)
  }, [props.coordinates]);

function handleResponse(response) {
setForecastData(response.data.daily);
setLoaded(true);
}

  function load() {
  let apiKey = "e450bc345a80a08ada69fd5c714d871d";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}
`;
  axios.get(apiUrl).then(handleResponse);
  }


if (loaded) {
  return (
    <div className="weather-forecast">
      <div className="row">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6) {
             return (
          <div className="col" key={index}>
              <WeatherForecastDay day={dailyForecast} />
            </div>
          );

          } else {
            return null;
          }
        })}
       
      </div>
    </div>
  );

} else {
 load();

return null;
 }

}
