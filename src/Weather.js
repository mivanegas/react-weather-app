import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setWeather(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "85ff25069e53273a07fd4c05239ba52e";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function Weather() {
    const [temperature, setTemperature] = useState(null);

    if (temperature) {
      return <h4> The Temperature is {Math.round(temperature)}°C</h4>;
    }
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
        {weather}
      </form>
    </div>
  );
}
