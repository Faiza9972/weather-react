import React, { useState } from "react";

export default function WeatherInfo(props) {
const [unit, setUnit] = useState("celsius");

function convertToFahrenheit(event) {
event.preventDefault();
setUnit("fahrenheit");
}

function fahrenheit() {
    return (props.celsius * 9/5) + 32;
}

function convertToCelsius(event) {
event.preventDefault();
setUnit("celsius");
}
if (unit === 'celsius') {
return (
    <div>
<strong>{Math.round(props.celsius)}</strong>
    <span className="units">°C |<a href="/" onClick={convertToFahrenheit}>°F</a></span>
</div>
);
} else {
return (
    <div>
<strong>{Math.round(fahrenheit())}</strong>
    <span className="units"><a href="/" onClick={convertToCelsius}>°C</a> |°F</span>
</div>
);

}
}