import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItineraryComponent from '../../components/ItineraryComponent';

const Itinerary = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Itinerary</h1>
                <ItineraryComponent />
            </>
        )
    };

    return renderHTML();
};
export default Itinerary;