import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const ChecklistComponent = () => {
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
                    <b>Item</b>
                </div>
                <div className="col">
                    <b>Remark</b>
                </div>
                <div className="col">
                    <b>Pseron-in-charge</b>
                </div>
                <div className="col">
                    <b>Action</b>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Prepare and bring the tents
                </div>
                <div className="col">
                    3 tents in total
                </div>
                <div className="col">
                    Wing
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/checklist/1');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/new/checklist');
                    }}>New Checklist</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default ChecklistComponent;