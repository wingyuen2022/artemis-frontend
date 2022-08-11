import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI } from '../../util/util.js';
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const TripsComponent = () => {
    const navigate = useNavigate();
    const [trips, setTrips] = useState(null);
    const [display, setDisplay] = useState(null);

    useEffect(()=>{
        getMethodBackendAPI('trip/').then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                    setTrips(res);
                });
            }
        }).catch((err)=>{
        });
    }, []);

    useEffect(()=>{
        if (trips !== null) {
            setDisplay(trips.map((cur)=>{
                return (
                <>
                    <CardGroup>
                        <Card>
                            <Row>
                                <Col>{cur.fields.name}</Col>
                                <Col>{cur.fields.start_date}</Col>
                                <Col>{cur.fields.destination.substring(0, 20)}...</Col>
                                <Col><Button onClick={()=>{
                                    navigate('/view/trip/' + cur.pk);
                                }}>View</Button></Col>
                            </Row>
                        </Card>
                    </CardGroup>
                </>);
            }));
        }
    }, [trips]);

    const renderHTML = () => {
        return (
            <>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Name</b></Col>
                            <Col><b>Start Date</b></Col>
                            <Col><b>Destination</b></Col>
                            <Col><b>Action</b></Col>
                        </Row>
                    </Card>
                </CardGroup>
                { (trips !== null) ? (
                <>
                    {display}
                </>) : (<></>) }
                
            </>
            );
    };

    return renderHTML();
}

export default TripsComponent;