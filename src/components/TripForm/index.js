import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI, postMethodBackendAPI, putMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';
import { Button, Container, Form, FormLabel, Row, Col } from "react-bootstrap";
import { setOrigin, setDestination, setFormName, setFormOrigin, setFormDestination, setFormStartDate, setFormEndDate } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import PlaceComponent from '../PlaceComponent';
import "./TripForm.css";

const TripForm = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const route = useSelector(state => state.routeReducer);
    const form = useSelector(state => state.formReducer);
    const [ready, setReady] = useState(false);

    useEffect(()=>{
        if (id !== undefined && id !== null) {
            const path = 'trip/' + id;
            getMethodBackendAPI(path).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        const trip = res[0];
                        const obj = trip.fields;
                        dispatch(setOrigin(obj.origin));
                        dispatch(setDestination(obj.destination));
                        dispatch(setFormName(obj.name));
                        dispatch(setFormOrigin(obj.origin));
                        dispatch(setFormDestination(obj.destination));
                        dispatch(setFormStartDate(obj.start_date));
                        dispatch(setFormEndDate(obj.end_date));
                        setReady(true);
                    });
                }
            }).catch((err)=>{
            });
        }
    }, [id]);

    useEffect(()=>{
        if (ready) {
            const name = document.getElementById("name");
            if (name !== undefined && name !== null) {
                name.value = form.name;
            }
            const origin = document.getElementById("origin");
            if (origin !== undefined && origin !== null) {
                origin.value = form.origin;
            }
            const destination = document.getElementById("destination");
            if (destination !== undefined && destination !== null) {
                destination.value = form.destination;
            }
            const startDate = document.getElementById("startDate");
            if (startDate !== undefined && startDate !== null) {
                startDate.value = form.startDate;
            }
            const endDate = document.getElementById("endDate");
            if (endDate !== undefined && endDate !== null) {
                endDate.value = form.endDate;
            }
        }
    }, [ready]);

    const resetForm = () => {
        dispatch(setFormName(null));
        dispatch(setFormOrigin(null));
        dispatch(setFormDestination(null));
        dispatch(setFormStartDate(null));
        dispatch(setFormEndDate(null));
    };

    const renderHTML = () => {
    return (
        <>
            <Container className="trip-form-container">
            <Form className="new-trip-form">
                <div id="form-label">
                    Origin:
                </div>
                <Col>
                    <PlaceComponent id="origin" value={route.origin}/><br />
                </Col>

                <div id="form-label">
                    Destination:
                </div>

                <div className="col">
                    <PlaceComponent id="destination" value={route.destination}/>
                </div>

                <Button id="route-btn" onClick={()=>{

               
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
                    <b>Trip name:</b>
                </FormLabel>
                <Col>
                    <input className="form-item-input" id="name" type="text" name="name" maxLength="20" placeholder="Name"/>
                </Col>
            
                <div id="form-label">
                    Start Date:
                </div>
                <Col>
                    <input className="form-item-input" id="startDate" class="inputs" name="startDate" type="date" required />
                </Col>
            
                <div id="form-label">
                    End Date:
                </div>
                <Col>
                    <input className="form-item-input" id="endDate" class="inputs" name="endDate" type="date" required />
                </Col>
            
                <Row>
                    <input className="form-item-input" id="id" type="number" name="id" hidden/><br />
                    <Button id="back-button" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            dispatch(setOrigin(null));
                            dispatch(setDestination(null));
                            resetForm();
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
                        const origin = document.getElementById("origin");
                        if (origin === undefined || origin === null || origin.value === "") {
                            alert('Enter origin');
                            return;
                        }
                        const destination = document.getElementById("destination");
                        if (destination === undefined || destination === null || destination.value === "") {
                            alert('Enter destination');
                            return;
                        }
                        const name = document.getElementById("name");
                        if (name === undefined || name === null || name.value === '') {
                            alert('Enter name');
                            return;
                        }
                        const startDate = document.getElementById("startDate");
                        if (startDate === undefined || startDate === null || startDate.value === "") {
                            alert('Enter startDate');
                            return;
                        }
                        const endDate = document.getElementById("endDate");
                        if (endDate === undefined || endDate === null || endDate.value === "") {
                            alert('Enter endDate');
                            return;
                        }
                        const obj = {
                            'name': name.value,
                            'origin': origin.value,
                            'destination': destination.value,
                            'start_date': startDate.value,
                            'end_date': endDate.value
                        };
                        if (id !== undefined && id !== null) {
                            const path = 'trip/' + id + '/';
                            putMethodBackendAPI(path, obj).then(()=>{
                                alert('saved');
                                navigate('/view/trip/' + id);
                            }).catch((err)=>{
                            });
                        } else {
                            postMethodBackendAPI('trip/', obj).then(()=>{
                                alert('saved');
                                resetForm();
                                navigate('/view/trip/all');
                            }).catch((err)=>{
                            });
                        }
                    }}>Save</Button>
                </Row>
            </Form>
            </Container>
        </>
        );
    };

    return renderHTML();
}

export default TripForm;

// <input className="form-item-input" id="location" type="text" name="location" maxLength="20" placeholder="Location"/>
/*
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
*/