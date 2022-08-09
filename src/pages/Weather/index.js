import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Weather from '../../components/WeatherComponent';
import Forecast from '../../components/WeatherComponent/forecast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './weather.css';

export default function WeatherApp() {
  const dispatch = useDispatch();
  dispatch(setTitle("Weather"));
    
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
                    <Weather lat={lat} long={long} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Forecast lat={lat} long={long} />
                </Col>
            </Row>
        </div>);
}