import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import BudgetComponent from '../../components/BudgetComponent';

const Budget = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
		navigate('/new/map');
	};

    const handleNext = () => {
		navigate('/new/checklist');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <h1>Add budget</h1>
                    </div>
                    <div className="col">
                        <BudgetComponent />
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
export default Budget;