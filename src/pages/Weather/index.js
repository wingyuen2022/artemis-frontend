import React, { useState, useEffect } from "react";
import WeatherComponent from '../../components/WeatherComponent';
import ForecastComponent from '../../components/WeatherComponent/forecast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './weather.css';

const Weather = () => {
    
  const [lat, setLat] = useState([51.8156]);
  const [long, setLong] = useState([0.8084]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    }, [lat,long]);
  
    return (
        <div className="weather-app">
            <Row>
                <Col>
                    <WeatherComponent lat={lat} long={long} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ForecastComponent lat={lat} long={long} />
                </Col>
            </Row>
        </div>);
};
export default Weather;