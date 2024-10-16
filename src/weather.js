import React from "react";

export default function Weather(){ return(
    <div className="weather-app">
    <header>
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="search-input"
          id="search-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </header>
    <main>
      <div className="current-weather">
        <div>
          <h1 className="current-city" id="current-city">Paris</h1>
          <p className="current-details">
            <span id="current-date"> Tuesday 21:45</span>, moderate rain
            <br />
            Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <span className="current-temperature-icon">☀️</span>
          <span className="current-temperature-value" id="current-temperature">
            24
          </span>

          <span className="current-temperature-unit"> °C </span>
        </div>
      </div>
    </main>
    <footer>
      <p>
        This project was coded by
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">Matt Delac</a> and is
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer"> on GitHub</a> and
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </p>
    </footer>
  </div>)}