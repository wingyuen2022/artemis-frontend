import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { openWeatherAPI } from '../../util/util.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './weather.css';
import { Card, Container } from 'react-bootstrap';

export default function Forecast({lat, long}) {
    const [forecast, setForecast] = useState(null);
    const [display, setDisplay] = useState(null);

    useEffect(()=>{
        openWeatherAPI('forecast', lat, long)
        .then((res) => res.json())
        .then((res) => {
            setForecast(res);
        }).catch((err) => {
            console.log(err);
        });
    }, [lat, long]);

    useEffect(()=>{
        if (forecast !== null) {
            setDisplay(forecast.list.map((item, index) => {
                if (index < 15) {
                return (
                    <div key={index} className="forecast">
                        <Row>
                            <Col>{moment(item.dt_txt).format("DD/MM")}</Col>
                            <Col>{moment(item.dt_txt).format("ddd")}</Col>
                            <Col>{moment(item.dt_txt).format("HH:mm")}</Col>
                            <Col><img src ={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="wthr img" /></Col>
                            <Col>{item.main.temp}</Col>
                            <Col>{item.main.humidity} %</Col>
                        </Row>
                    </div>
                )}
            }));
        }
    }, [forecast]);
  
    return (
        <>
            <Container className="forecast-container">
            {(display !== null) ? (
                <div aria-label="forecast data">
                    
                        <row key='-1' className="forecast"
                        id="forecast-heading">
                            <Col>Date</Col>
                            <Col>Day</Col>
                            <Col>Hour</Col>
                            <Col>Weather</Col>
                            <Col>&deg;C</Col>
                            <Col>%</Col>
                        </row>
                    
                    <Card className="card">
                        <Card.Body className="forecast-list">{display}
                        </Card.Body>
                    </Card>
                </div>
            ):(<p></p>)}
            </Container>
        </>
    );  
}
