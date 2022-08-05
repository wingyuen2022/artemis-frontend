import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DurationComponent from '../../components/DurationComponent';

const Duration = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Duration</h1>
                <DurationComponent />
            </>
        )
    };

    return renderHTML();
};
export default Duration;