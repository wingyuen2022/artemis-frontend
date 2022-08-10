import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { setOrigin, setDestination } from "../../actions";
import { Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import PlaceComponent from '../PlaceComponent';
import "./TripForm.css";

const TripForm = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const route = useSelector(state => state.routeReducer);

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
                            <input className="form-item-input" type="radio" id="public" name="public" value="true" checked></input>
                            <label className="form-label"  for="public">Public</label>
                        </div>
                        <div className="col">
                            <input className="form-item-input" type="radio" id="private" name="public" value="false"></input><label className="form-label" for="private">Private</label>
                        </div>
                    </div>
                </div>
           
                <div className="form-label">
                    <b>Origin:</b>
                </div>
                <div className="col">
                    <PlaceComponent placeholder="Origin" /><br />
                </div>

                <div className="form-label">
                    <b>Destination:</b>
                </div>
                <div className="col">
                    <PlaceComponent placeholder="Destination" /><br />
                </div>

                <Button onClick={()=>{
                    const origin = document.getElementById("origin");
                    if (origin !== undefined && origin !== null && origin !== "") {
                        dispatch(setOrigin(origin.value));
                    }
                    const destination = document.getElementById("destination");
                    if (destination !== undefined && destination !== null && destination !== "") {
                        dispatch(setDestination(destination.value));
                    }
                    console.log(route.origin);
                    console.log(route.destination);
                }}>View route</Button>
            
            
                <div className="form-label">
                    <b>Start Date:</b>
                </div>
                <div className="col">
                    <input className="form-item-input" id="startDate" class="inputs" name="startDate" type="date" required />
                </div>
            
                <div className="form-label">
                    <b>End Date:</b>
                </div>
                <div className="col">
                    <input className="form-item-input" id="endDate" class="inputs" name="endDate" type="date" required />
                </div>
            
                <Row className="row">
                    <input className="form-item-input" id="id" type="number" name="id" hidden/><br />
                    <Button id="back-button" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/home');
                        }
                    }}>Go Back</Button>
                    <Button variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/home');
                        }
                    }} hidden={id === null}>Delete</Button>
                    <Button id="save-button" onClick={()=>{
                        alert('saved');
                        navigate('/view/trip/1');
                    }}>Save</Button>
                </Row>
            </Form>
            </Container>
        </>
        );
    };

    return renderHTML();
}
// <input className="form-item-input" id="location" type="text" name="location" maxLength="20" placeholder="Location"/>
export default TripForm;