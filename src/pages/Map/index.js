import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MapComponent from '../../components/MapComponent';

const Map = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Map</h1>
                <MapComponent />
            </>
        )
    };

    return renderHTML();
};
export default Map;