import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../../actions";
import { caravan, tent } from '../../assets/images/camping';
import HomeComponent from '../../components/HomeComponent';
import { Navigate } from 'react-router-dom';
import { Button, Card, CardGroup, CardImg, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    /*const { isAuthenticated, user, loading } = useSelector(state => state.user);*/
    const dispatch = useDispatch();
    dispatch(setTitle("Home"));
    /*if (!isAuthenticated && !loading && user === null)
		return <Navigate to='/login' />;*/

    // useEffect(()=>{
        
    // }, []);

    const renderHTML = () => {
        return (
            <>  

                <Container className="home-container">
                {/* {loading || user === null ? (
				<div className='spinner-border text-primary' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			) : ( */}
                    <CardGroup>
                        <Card>
                            <Card.Header className="card-title">New Trip</Card.Header>
                            <CardImg className="card-image" src={tent}></CardImg>
                            {/* <Card.Body> Welcome {user.first_name}! Organise a new trip today!</Card.Body> */}
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
                                navigate('/view/trip/all');
                            }}>View Trips</Button>
                        </Card>
                    </CardGroup>

            {/* )} */}
                </Container>
        
                <HomeComponent />
            
            </>
        )
    };

    return renderHTML();
};
export default Home;
