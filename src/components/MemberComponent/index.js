import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const MemberComponent = () => {
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
                    <b>Member Header 1</b>
                </div>
                <div className="col">
                    <b>Member Header 2</b>
                </div>
                <div className="col">
                    <b>Action</b>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Member Data 1
                </div>
                <div className="col">
                    Member Data 2
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/new/member');
                    }}>New Member</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default MemberComponent;