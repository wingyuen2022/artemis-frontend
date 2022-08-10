import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './weather.css';

export default function Forecast({lat, long}) {
    const [forecast, setForecast] = useState(null);
    const [display, setDisplay] = useState(null);

    useEffect(()=>{
        let domain = `https://artemis-camping-backend.herokuapp.com/api/`;
        //let domain = `http://127.0.0.1:8000/api/`;
        let url = domain + `forecast/lat=${lat}&long=${long}`;
        fetch(url)
        .then(res => res.json())
        .then((res) => {
            setForecast(res);
        }).catch((err) => {
            console.log(err)
        });
    }, []);

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
            {(display !== null) ? (
                <div>
                    <ul aria-label="forecast data">
                        <li>
                            <div key='-1' className="forecast">
                                <Row>
                                    <Col>Date</Col>
                                    <Col></Col>
                                    <Col>Hour</Col>
                                    <Col>Weather</Col>
                                    <Col>&deg;C</Col>
                                    <Col>%</Col>
                                </Row>
                            </div>
                        </li>
                        <li className="forecast-list">{display}</li>
                    </ul>
                </div>
            ):(<p></p>)}
        </>
    );  
}
