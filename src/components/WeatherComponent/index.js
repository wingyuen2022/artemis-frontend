import React from 'react';
import './weather.css';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import {
    WiCloud,
    WiThunderstorm,
    WiRain,
    WiShowers,
    WiSnowflakeCold,
    WiDaySunny,
    WiSmog,
} from 'react-icons/wi';
  import styled from 'styled-components';
 

export default function Weather({weatherData}) {

    const WeatherIcon = styled.div`
        color: whitesmoke;
    `;

  const refresh = () => {
    window.location.reload();
  }

  let weatherIcon = null;

  if (weatherData.weather[0].main === 'Thunderstorm') {
    weatherIcon = {WiThunderstorm};
  } else if (weatherData.weather[0].main === 'Drizzle') {
    weatherIcon = {WiShowers} ;
  } else if (weatherData.weather[0].main === 'Rain') {
    weatherIcon = {WiRain} ;
  } else if (weatherData.weather[0].main === 'Snow') {
    weatherIcon = {WiSnowflakeCold};
  } else if (weatherData.weather[0].main === 'Clear') {
    weatherIcon = {WiDaySunny};
  } else if (weatherData.weather[0].main === 'Clouds') {
    weatherIcon = {WiCloud} ;
  } else {
    weatherIcon = {WiSmog};
  }

  return (
    <>
    <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
      <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
    </div>
    <div className="flex">
      <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
      <div className="flex">
        <WeatherIcon style={{fontSize:30,marginTop:15}}>{weatherIcon}</WeatherIcon>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>
    </div>

    <div className="flex">
      <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
      <p className="temp">Humidity: {weatherData.main.humidity} %</p>
    </div>

    <div className="flex">
      <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-GB')}</p>
      <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-GB')}</p>
    </div>  
    </div>
    </>
  )
}