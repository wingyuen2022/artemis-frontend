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
                    <b>Name</b>
                </div>
                <div className="col">
                    <b>Action</b>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Wing
                </div>
                <div className="col">
                    <Button role="edit" onClick={()=>{
                        navigate('/edit/member/1');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Edgar
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/2');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Sam
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/3');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Nathan
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/4');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Summira
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/5');
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