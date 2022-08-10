import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const MessageForm = () => {
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
                    <b>Message:</b><input id="message" type="text" name="message" maxLength="500" placeholder="message"/><br />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input id="id" type="number" name="id" hidden/><br />
                    <Button onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/message');
                        }
                    }}>Back</Button>
                    <Button onClick={()=>{
                        alert('saved');
                        navigate('/view/message');
                    }}>Save</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default MessageForm;