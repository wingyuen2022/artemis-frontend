import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const BudgetComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);
    const chat = useSelector(state => state.chatReducer);

    useEffect(()=>{

    }, []);

    const renderHTML = () => {
    return (
        <>
            <div className="row">
                <div className="col" role='item'>
                    <b>Item</b>
                </div>
                <div className="col" role="price">
                    <b>Price</b>
                </div>
                <div className="col" role="remark">
                    <b>Remark</b>
                </div>
                <div className="col" role="action">
                    <b>Action</b>
                </div>
            </div>
            <div className="row">
                <div className="col" role="car">
                    Rental Car
                </div>
                <div className="col">
                    1000
                </div>
                <div className="col">
                    We booked a SUV
                </div>
                <div className="col">
                    <Button role="edit" onClick={()=>{
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