import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const MemberForm = () => {
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
                    <input id="id" type="number" name="id" hidden/><br />
                    <input id="name" type="text" name="name" maxlength="20" placeholder="Name"/><br />
                    <Button onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/member');
                        }
                    }}>Back</Button>
                    <Button variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/member');
                        }
                    }}>Delete</Button>
                    <Button onClick={()=>{
                        alert('saved');
                        navigate('/view/member');
                    }}>Save</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default MemberForm;