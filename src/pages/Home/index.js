import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../../actions";
import { caravan, tent } from '../../assets/images/camping';
import HomeComponent from '../../components/HomeComponent';
import { Button, Card, CardGroup, CardImg, Container } from 'react-bootstrap';
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    dispatch(setTitle("Home"));

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <Container className="home-container">
                    <CardGroup>
                        <Card>
                            <Card.Header className="card-title">New Trip</Card.Header>
                            <CardImg className="card-image" src={tent}></CardImg>
                            <Card.Body>Organise a new trip today!</Card.Body>
                            <Button id="new-trip-btn" onClick={()=>{
                                navigate('/new/trip');
                            }}>New Trip
                            </Button>
                        </Card>
                        <Card>
                        <Card.Header className="card-title">View Trips</Card.Header>
                            <CardImg className="card-image" src={caravan}></CardImg>
                            <Card.Body className="card-body">View all your previous trips!
                            </Card.Body>
                            <Button id="view-trip-btn" onClick={()=>{
                                navigate('/view/trip/1');
                            }}>View Trips</Button>
                        </Card>
                    </CardGroup>
                </Container>
                <HomeComponent />
            </>
        )
    };

    return renderHTML();
};
export default Home;