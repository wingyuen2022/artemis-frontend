import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ItineraryComponent from '../../components/ItineraryComponent';

const Itinerary = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
   
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
                        <ItineraryComponent />
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
export default Itinerary;