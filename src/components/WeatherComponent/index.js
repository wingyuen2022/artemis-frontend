import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Container } from "react-bootstrap";
import { openWeatherAPI } from '../../util/util.js';
import './weather.css';

export default function Weather({lat, long}) {
    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        openWeatherAPI('weather', lat, long)
        .then((res) => res.json())
        .then((res) => {
            setWeather(res);
        }).catch((err) => {
            console.log(err);
        });
    }, [lat, long]);

    return (
        <>
            <Container className="weather-container">
            {(weather !== null) ? (
                <div className="main">
                <div className="top">
                    <p className="header">{weather.name}</p>
                </div>
                <div className="flex">
                    <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                    <div className="row">
                        <p className="description">{weather.weather[0].main}</p>
                        <img src ={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="wthr img" />
                    </div>
                </div>

                <div className="flex">
                    <p className="temp">Temperature: {weather.main.temp} &deg;C</p>
                    <p className="temp">Humidity:                     {weather.main.humidity} %</p>
                </div>

                <div className="flex">
                    <p className="sunrise-sunset">Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-GB')}</p>
                    <p className="sunrise-sunset">Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-GB')}</p>
                </div>  
            </div>):(<p></p>)}
            </Container>
        </>
    )
}