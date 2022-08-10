import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const HomeCoponent = () => {
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
                    <b>Trip Name</b>
                </div>
                <div className="col">
                    <b>Location</b>
                </div>
                <div className="col">
                    <b>Action</b>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Peak District Trip
                </div>
                <div className="col">
                    Peak District
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/view/trip/1');
                    }}>View</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/new/trip');
                    }}>New Trip</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default HomeCoponent;