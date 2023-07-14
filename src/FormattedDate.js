import React from "react";


export default function FormattedDate(props) {
//console.log(props.date);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[props.day.getDay()];
let hours = props.day.getHours();
let minutes = props.day.getMinutes();

return (<div>{day} {hour}:{minutes}</div>);

}