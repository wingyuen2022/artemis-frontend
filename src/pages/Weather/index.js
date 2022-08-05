import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import WeatherComponent from '../../components/WeatherComponent';

const Weather = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Weather"));

    const handleBack = () => {
		navigate('-1');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <WeatherComponent />
                    </div>
                    <div className="col">
                        <Button onClick={handleBack}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Weather;