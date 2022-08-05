import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import WeatherComponent from '../../components/WeatherComponent';

const Weather = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Weather</h1>
                <WeatherComponent />
            </>
        )
    };

    return renderHTML();
};
export default Weather;