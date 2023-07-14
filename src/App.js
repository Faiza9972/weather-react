//import logo from "./logo.svg";
import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

import Forecast from "./Forecast.js";

function App() {
  return (
    <div className="App container">
      <div className="weather-app-wrapper">
        <Weather defaultCity="Athens"/>
        <Forecast />
      </div>
      <div className="link">
        <small>
          <a
            href="https://github.com/Faiza9972/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
             {" "}
          </a>
           by Faiza Khalid.
        </small>
      </div>
    </div>
  );
}

export default App;
