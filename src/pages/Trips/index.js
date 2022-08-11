import React from 'react';
import { Container } from "react-bootstrap";
import TripsComponent from '../../components/TripsComponent';
import "./Trips.css";

const Trips = () => {
    return(
        <>
          <Container className="trips-container">
            <div>
            <h1>Welcome to your Trips Section!</h1>
            <h3>Here you can view, edit or delete your current trip, view previous trips or create a new trip!</h3>
                <TripsComponent />
            </div>
          </Container>
        </>
    )
};
export default Trips;
