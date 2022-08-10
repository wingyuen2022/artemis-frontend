import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI } from '../../util/util.js';
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const TripComponent = ({id}) => {
    const navigate = useNavigate();
    const [ trip, setTrip ] = useState(null);

    useEffect(()=>{
        getMethodBackendAPI(id).then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                  setTrip(res[0]);
                });
            }
        }).catch((err)=>{
        });
      }, []);

    const renderHTML = () => {
    return (
        <>
            { (trip !== null) ? (
            <>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Trip name:</b></Col>
                            <Col>{trip.fields.name}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Origin:</b></Col>
                            <Col>{trip.fields.origin}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Destination:</b></Col>
                            <Col>{trip.fields.destination}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Start Date:</b></Col>
                            <Col>{trip.fields.start_date}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>End Date:</b></Col>
                            <Col>{trip.fields.end_date}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Member:</b></Col>
                            <Col>
                                <Button onClick={()=>{
                                    navigate('/view/member/' + trip.pk);
                                }}>View Member</Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Budget:</b></Col>
                            <Col>
                                <Button onClick={()=>{
                                    navigate('/view/budget/' + trip.pk);
                                }}>View Budget</Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Checklist:</b></Col>
                            <Col>
                                <Button onClick={()=>{
                                    navigate('/view/checklist/' + trip.pk);
                                }}>View Checklist</Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
                <div className="row">
                    <div className="col">
                        <Button onClick={()=>{
                            navigate('/edit/trip/' + trip.pk);
                        }}>Edit</Button>
                    </div>
                </div>
            </>) : (<h1>No data</h1>) }
        </>
        );
    };

    return renderHTML();
}

export default TripComponent;