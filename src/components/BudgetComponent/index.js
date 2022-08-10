import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';

const BudgetComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(()=>{

    }, []);

    const renderHTML = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <b>Item</b>
                </div>
                <div className="col">
                    <b>Price</b>
                </div>
                <div className="col">
                    <b>Remark</b>
                </div>
                <div className="col">
                    <b>Action</b>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Rental Car
                </div>
                <div className="col">
                    1000
                </div>
                <div className="col">
                    We booked a SUV
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/budget/1');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/new/budget');
                    }}>New Budget</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default BudgetComponent;