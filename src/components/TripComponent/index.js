import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrip, setOrigin, setDestination } from "../../actions";
import { getMethodBackendAPI } from '../../util/util.js';
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./Trip.css";


const TripComponent = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const trip = useSelector(state => state.tripReducer);
    const [ curTrip, setCurTrip ] = useState(null);
    const [ memberSize, setMemberSize ] = useState(0);
    const [ budgetSize, setBudgetSize ] = useState(0);
    const [ checklistSize, setChecklistSize ] = useState(0);

    useEffect(()=>{
        const path1 = 'trip/' + id;
        getMethodBackendAPI(path1).then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                    const trip = res[0];
                    setCurTrip(trip);
                    dispatch(setTrip(trip));
                });
            }
        }).catch((err)=>{
        });
        const path2 = 'trip/' + id + '/members/';
        getMethodBackendAPI(path2).then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                    setMemberSize(res.length);
                });
            }
        }).catch((err)=>{
        });
        const path3 = 'trip/' + id + '/budget/';
        getMethodBackendAPI(path3).then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                    setBudgetSize(res.length);
                });
            }
        }).catch((err)=>{
        });
        const path4 = 'trip/' + id + '/checklist/';
        getMethodBackendAPI(path4).then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                    setChecklistSize(res.length);
                });
            }
        }).catch((err)=>{
        });
      }, []);

    const renderHTML = () => {
    return (
        <>
            { (curTrip !== null) ? (
            <>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">Trip name:</b></Col>
                            <Col>{curTrip.fields.name}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">Origin:</b></Col>
                            <Col>{curTrip.fields.origin}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">Destination:</b></Col>
                            <Col>{curTrip.fields.destination}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">Start Date:</b></Col>
                            <Col>{curTrip.fields.start_date}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">End Date:</b></Col>
                            <Col>{curTrip.fields.end_date}</Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">Member:</b></Col>
                            <Col>
                                <Button id="member-btn" onClick={()=>{
                                    navigate('/view/member');
                                }}>View Member</Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">Budget:</b></Col>
                            <Col>
                                <Button id="budget-btn" onClick={()=>{
                                    navigate('/view/budget');
                                }}>View Budget</Button>
                            </Col>
                        </Row>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card id="trip-card">
                        <Row>
                            <Col><b id="form-label">Checklist:</b></Col>
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