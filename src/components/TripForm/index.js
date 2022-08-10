import React from 'react'
import { useNavigate } from "react-router-dom";
import { postMethodBackendAPI } from '../../util/util.js';
import { setOrigin, setDestination } from "../../actions";
import { Container, Form, FormLabel, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import PlaceComponent from '../PlaceComponent';
import "./TripForm.css";

const TripForm = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const route = useSelector(state => state.routeReducer);

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
                        const name = document.getElementById("name");
                        if (name === undefined || name === null || name.value === '') {
                            alert('Enter name');
                            return;
                        }
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
                        postMethodBackendAPI('', obj).then(()=>{
                            alert('saved');
                            navigate('/view/trip/all');
                        }).catch((err)=>{
                        });
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