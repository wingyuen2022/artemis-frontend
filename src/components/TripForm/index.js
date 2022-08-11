import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI, postMethodBackendAPI, putMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';
import { setOrigin, setDestination } from "../../actions";
import { Button, Container, Form, FormLabel, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import PlaceComponent from '../PlaceComponent';

import "./TripForm.css";

const TripForm = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const route = useSelector(state => state.routeReducer);
    const [trip, setTrip] = useState(null);

    useEffect(()=>{
        if (id !== undefined && id !== null) {
            const path = 'trip/' + id;
            getMethodBackendAPI(path).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setTrip(res[0]);
                    });
                }
            }).catch((err)=>{
            });
        }
    }, []);

    useEffect(()=>{
        if (trip !== null) {
            const obj = trip.fields;
            const name = document.getElementById("name");
            if (name !== undefined && name !== null) {
                name.value = obj.name;
            }
            const origin = document.getElementById("origin");
            if (origin !== undefined && origin !== null) {
                origin.value = obj.origin;
            }
            const destination = document.getElementById("destination");
            if (destination !== undefined && destination !== null) {
                destination.value = obj.destination;
            }
            const startDate = document.getElementById("startDate");
            if (startDate !== undefined && startDate !== null) {
                startDate.value = obj.start_date;
            }
            const endDate = document.getElementById("endDate");
            if (endDate !== undefined && endDate !== null) {
                endDate.value = obj.end_date;
            }
        }
    }, [trip]);

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
            
                <FormLabel className="form-label">
                    <b>Public or Private:</b>
                </FormLabel>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <input className="form-item-input" type="radio" id="public" name="public" value="true" checked></input>
                            <FormLabel className="form-label"  for="public">Public</FormLabel>
                        </div>
                        <div className="col">
                            <input className="form-item-input" type="radio" id="private" name="public" value="false"></input><FormLabel className="form-label" for="private">Private</FormLabel>
                        </div>
                    </div>
                </div>
           
                <FormLabel className="form-label">
                    <b>Location:</b>
                </FormLabel>

                <div className="form-label">
                    <b>Origin:</b>
                </div>

                <div className="col">
                    <PlaceComponent id="origin" value={route.origin}/><br />
                </div>

                <div className="form-label">
                    <b>Destination:</b>
                </div>
                <div className="col">
                    <PlaceComponent id="destination" value={route.destination}/><br />
                </div>

                <Button onClick={()=>{
                    const origin = document.getElementById("origin");
                    const destination = document.getElementById("destination");
                    if (origin !== undefined && 
                        origin !== null && 
                        origin.value !== "" &&
                        destination !== undefined &&
                        destination !== null &&
                        destination.value !== "") {
                        dispatch(setOrigin(origin.value));
                        dispatch(setDestination(destination.value));
                        navigate('/view/map');
                    } else {
                        alert('Make sure you have Origin and Destination');
                    }
                }}>View route</Button>
            
            
                <FormLabel className="form-label">
                    <b>Start Date:</b>
                </FormLabel>
                <div className="col">
                    <input className="form-item-input" id="startDate" class="inputs" name="startDate" type="date" required />
                </div>
            
                <FormLabel className="form-label">
                    <b>End Date:</b>
                </FormLabel>
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
                            const path = id + '/';
                            deleteMethodBackendAPI(path, null).then(()=>{
                                alert('saved');
                                navigate('/view/trip/all');
                            }).catch((err)=>{
                            });
                        }
                    }} hidden={id === null}>Delete</Button>
                    <Button id="save-button" onClick={()=>{
                        alert('saved');
                        navigate('/view/home');
                    }}>Save Trip</Button>                        

                </Row>
            </Form>
            </Container>
        </>
        );
    };

    return renderHTML();
}

export default TripForm;
