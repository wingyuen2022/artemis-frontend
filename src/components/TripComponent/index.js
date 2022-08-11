import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrip } from "../../actions";
import { getMethodBackendAPI } from '../../util/util.js';
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./Trip.css";


const TripComponent = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const trip = useSelector(state => state.tripReducer);
    const [ curTrip, setCurTrip ] = useState(null);

    useEffect(()=>{
        const path = 'trip/' + id;
        getMethodBackendAPI(path).then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                    const trip = res[0];
                    setCurTrip(trip);
                    dispatch(setTrip(trip));
                });
            }
        }).catch((err)=>{
        });
      }, [dispatch, id]);

    const renderHTML = () => {
    return (
        <>
            { (curTrip !== null) ? (
            <>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Trip name:</b></Col>
                            <Col>{curTrip.fields.name}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Origin:</b></Col>
                            <Col>{curTrip.fields.origin}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Destination:</b></Col>
                            <Col>{curTrip.fields.destination}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Start Date:</b></Col>
                            <Col>{curTrip.fields.start_date}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>End Date:</b></Col>
                            <Col>{curTrip.fields.end_date}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card>
                        <Row>
                            <Col><b>Member:</b></Col>
                            <Col>
                                <Button id="member-btn" onClick={()=>{
                                    navigate('/view/member');
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
                                <Button id="budget-btn" onClick={()=>{
                                    navigate('/view/budget');
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
                                <Button id="checklist-btn" onClick={()=>{
                                    navigate('/view/checklist');
                                }}>View Checklist</Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
                <div className="row">
                    <div className="col">
                        <Button id="edit-btn" onClick={()=>{
                            navigate('/edit/trip/' + trip.pk);
                        }}>Edit</Button>
                    </div>
                </div>
            </>) : (<></>) }

        </>
        );
    };

    return renderHTML();
}

export default TripComponent;