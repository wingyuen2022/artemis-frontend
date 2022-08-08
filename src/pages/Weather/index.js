import './weather.css';
import React, { useEffect, useState, Spinner } from "react";
import WeatherComponent from "../../components/WeatherComponent";

export default function Weather() {
  
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&q=London&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,lon])
  
  return (
    <div className="weather-app">
        <h1>Weather Forecast</h1>
      {(typeof data.main != 'undefined') ? (
        <WeatherComponent weatherData={data}/>
      ) : (
        <div><WeatherComponent weatherData={data}/></div>
      )}
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}