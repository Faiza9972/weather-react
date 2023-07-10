//import logo from "./logo.svg";
import "./App.css";
import "./Weather.css";
import Weather from "./Weather";

import Search from "./Search.js";
import Forecast from "./Forecast.js";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <Search />
        <Weather />
        <Forecast />
      </div>
      <div className="link">
        <small>
          <a
            href="https://github.com/Faiza9972/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Faiza Khalid on{" "}
          <a
            href="https://github.com/Faiza9972/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
