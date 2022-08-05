import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MapComponent from '../../components/MapComponent';

const Map = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
		navigate('/new/duration');
	};

    const handleNext = () => {
		navigate('/new/budget');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <h1>Add map</h1>
                    </div>
                    <div className="col">
                        <MapComponent />
                    </div>
                    <div className="col">
                        <Button onClick={handleBack}>Back</Button>
                        <Button onClick={handleNext}>Next</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Map;