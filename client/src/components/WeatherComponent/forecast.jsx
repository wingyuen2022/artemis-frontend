import React from "react";
import moment from 'moment';
import './weather.css';
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


export default function Forecast(props, {weatherData}) {

  const WeatherIcon = styled.div`
  color: whitesmoke;
`;

  const { forecast } = props;

  console.log("Forecast", forecast);

  const results = forecast.map((item, index) => {

    let weatherIcon = null;

    if (item.description === 'Thunderstorm') {
      weatherIcon = {WiThunderstorm} ;
    }else if (item.description === 'Drizzle') {
      weatherIcon = {WiShowers} ;
    } else if (item.description === 'Rain') {
      weatherIcon = {WiRain} ;
    } else if (item.description === 'Snow') {
      weatherIcon = {WiSnowflakeCold};
    } else if (item.description === 'Clear') {
      weatherIcon = {WiDaySunny} ;
    } else if (item.description === 'Clouds') {
      weatherIcon = {WiCloud};
    } else {
      weatherIcon = {WiSmog} ;
    }

    return (
      <div key={index} className="forecast">
        <div className="flex-forecast">
        <p>{moment(item.dt_txt).format("dddd")}</p>
      
        <WeatherIcon style={{fontSize:25,marginTop:4}}>{weatherIcon}</WeatherIcon>

        <p>
          {item.temperature} &deg;C
        </p>
        </div>
      </div>
    )
  })
  
  return(
    <div>
      <ul aria-label="forecast data">
        <li>{results}</li>
      </ul>
    </div>
  );
  
}