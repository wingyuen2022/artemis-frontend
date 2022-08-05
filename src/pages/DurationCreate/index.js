import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import DurationComponent from '../../components/DurationComponent';

const Duration = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("New Duration"));

    const handleBack = () => {
		navigate('/new/member');
	};

    const handleNext = () => {
		navigate('/new/map');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <DurationComponent />
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
export default Duration;