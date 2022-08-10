import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const MemberForm = ({id}) => {
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
                    <b>Name:</b><input id="name" type="text" name="name" maxLength="20" placeholder="Name"/><br />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input id="id" type="number" name="id" hidden/><br />
                    <Button role="back" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/member');
                        }
                    }}>Back</Button>
                    <Button variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/member');
                        }
                    }} hidden={id === null}>Delete</Button>
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