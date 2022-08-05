import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import BudgetForm from '../../components/BudgetForm';

const Budget = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Budget"));

    const handleBack = () => {
		navigate('-1');
	};

    const handleEdit = () => {
		navigate('/edit/budget');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <BudgetForm />
                    </div>
                    <div className="col">
                        <Button onClick={handleBack}>Back</Button>
                        <Button onClick={handleEdit}>Edit</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Budget;