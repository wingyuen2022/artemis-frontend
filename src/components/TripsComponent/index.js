import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI } from '../../util/util.js';
import { CardGroup, Card, Row, Col, Container } from "react-bootstrap";
import { setOrigin, setDestination } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const TripsComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
                    <Container className="trips-container">
                      <CardGroup>
                        <Card className="trips-card">
                            <Row>
                                <Col><b>{cur.fields.name}</b></Col>
                            </Row>
                            <Row>
                                <Col>{cur.fields.start_date}</Col>
                            </Row>
                            <Row>
                                <Col>{cur.fields.destination}</Col>
                            </Row>
                            <Row>
                                <Col><Button id="edit-btn" onClick={()=>{
                                    dispatch(setOrigin(cur.fields.origin));
                                    dispatch(setDestination(cur.fields.destination));
                                    navigate('/view/map');
                                }}>Map</Button></Col>
                                <Col><Button id="edit-btn" onClick={()=>{
                                    navigate('/view/trip/' + cur.pk);
                                }}>View</Button></Col>
                            </Row>
                        </Card>
                      </CardGroup>
                    </Container>
                </>);
            }));
        }
    }, [trips, navigate]);

    const renderHTML = () => {
        return (
            <>
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