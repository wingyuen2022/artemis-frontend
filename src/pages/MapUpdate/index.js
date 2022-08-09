import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MapComponent from '../../components/MapComponent';

const Map = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
		navigate('-1');
	};

    const handleSave = () => {
		alert('save');
        navigate('/view/map');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <h1>Edit map</h1>
                    </div>
                    <div className="col">
                        <MapComponent />
                    </div>
                    <div className="col">
                        <Button onClick={handleBack}>Back</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Map;