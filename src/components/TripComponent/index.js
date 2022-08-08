import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const TripComponent = () => {
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
                <div className="col">
                    <b>Trip name:</b>
                </div>
                <div className="col">
                    Peak District Trip
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b>Public:</b>
                </div>
                <div className="col">
                    public
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b>Location:</b>
                </div>
                <div className="col">
                    Peak district
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b>Start Date:</b>
                </div>
                <div className="col">
                    2022-08-15
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b>End Date:</b>
                </div>
                <div className="col">
                    2022-08-21
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b>Member:</b>
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/view/member');
                    }}>View Member</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b>Budget:</b>
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/view/budget');
                    }}>View Budget</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b>Checklist:</b>
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/view/checklist');
                    }}>View Checklist</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/trip');
                    }}>Edit</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default TripComponent;