import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import BudgetComponent from '../../components/BudgetComponent';

const Budget = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const trip = useSelector(state => state.tripReducer);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <BudgetComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button id="back-btn" onClick={()=>{
                            navigate('/view/trip/' + trip.pk);
                        }}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Budget;