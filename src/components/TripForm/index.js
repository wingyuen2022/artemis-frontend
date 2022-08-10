import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import "./TripForm.css";

const TripForm = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);
    const chat = useSelector(state => state.chatReducer);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
    return (
        <>
            <Container className="trip-form-container">
            <Form className="new-trip-form">
                <FormLabel className="form-label">
                    <b>Trip name:</b>
                </FormLabel>
                <input className="form-item-input" id="name" type="text" name="name" maxLength="20" placeholder="Name"/>
                <br />
               
        
            
                <FormLabel className="col">
                    <b>Public or Private:</b>
                </FormLabel>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <input type="radio" id="public" name="public" value="true" checked></input><label for="public">Public</label>
                        </div>
                        <div className="col">
                            <input type="radio" id="private" name="public" value="false"></input><label for="private">Private</label>
                        </div>
                    </div>
                </div>
           
                <div className="col">
                    <b>Location:</b>
                </div>
                <div className="col">
                    <input id="location" type="text" name="location" maxLength="20" placeholder="Location"/><br />
                </div>
            
                <div className="col">
                    <b>Start Date:</b>
                </div>
                <div className="col">
                    <input id="startDate" class="inputs" name="startDate" type="date" required />
                </div>
            
                <div className="col">
                    <b>End Date:</b>
                </div>
                <div className="col">
                    <input id="endDate" class="inputs" name="endDate" type="date" required />
                </div>
            
                <div className="col">
                    <input id="id" type="number" name="id" hidden/><br />
                    <Button onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/home');
                        }
                    }}>Back</Button>
                    <Button variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/home');
                        }
                    }} hidden={id === null}>Delete</Button>
                    <Button onClick={()=>{
                        alert('saved');
                        navigate('/view/trip/1');
                    }}>Save</Button>
                </div>
            </Form>
            </Container>
        </>
        );
    };

    return renderHTML();
}

export default TripForm;