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
    dispatch(setTitle("Edit Duration"));

    const handleBack = () => {
		navigate('-1');
	};

    const handleSave = () => {
		alert('save');
        navigate('/view/duration');
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
                        <Button onClick={handleSave}>Save</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Duration;