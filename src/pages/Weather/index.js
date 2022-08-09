import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Weather from '../../components/WeatherComponent';
import Forecast from '../../components/WeatherComponent/forecast';
import { Spinner } from 'react-bootstrap';
import './weather.css';

export default function WeatherApp() {
  const dispatch = useDispatch();
  dispatch(setTitle("Weather"));
    
  const [lat, setLat] = useState([51.8156]);
  const [long, setLong] = useState([0.8084]);
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    
      getWeather(lat, long)
      .then(weather => {
        setWeatherData(weather);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });


      getForecast(lat, long)
        .then(data => {
          setForecast(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
        });

  }, [lat,long,error])


  function handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Please Enable your Location in your browser!");
    }
  }

  function getWeather(lat, long) {
    return fetch(
      `${process.env.REACT_APP_WEATHER_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then(res => handleResponse(res))
      .then(weather => {
        return weather;
        /*if (Object.entries(weather).length) {
          const mappedData = mapDataToWeatherInterface(weather);
          return mappedData;
        }*/
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  function getForecast(lat, long) {
    return fetch(
      `${process.env.REACT_APP_WEATHER_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then(res => handleResponse(res))
      .then(forecastData => {
        if (Object.entries(forecastData).length) {
          return forecastData.list
            .filter(forecast => forecast.dt_txt.match(/09:00:00/));
            //.map(mapDataToWeatherInterface);
        }
      });
  }

  /*function mapDataToWeatherInterface(data) {
    const mapped = {
      date: data.dt * 1000, // convert from seconds to milliseconds
      description: data.weather[0].main,
      temperature: Math.round(data.main.temp),

    };
  
    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }
  
    return mapped;
  }*/
  
  return (
    <div className="weather-app">
      {(weatherData !== null && forecast !== null) ? (
        <div>
          <Weather weatherData={weatherData} />
          <Forecast forecast={forecast} />
        </div>
      ): (
                <div>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading..</span>
                  </Spinner>
                </div>
              )}
            </div>
        );
    }