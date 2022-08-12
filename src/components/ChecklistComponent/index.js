import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMethodBackendAPI } from '../../util/util.js';
import { useSelector } from "react-redux";
import { Button, Row, Col, CardGroup, Card } from "react-bootstrap";

import "./Checklist.css";

const ChecklistComponent = () => {
    const navigate = useNavigate();
    const trip = useSelector(state => state.tripReducer);
    const [checklists, setChecklists] = useState(null);
    const [display, setDisplay] = useState(null);

    useEffect(()=>{
        if (trip !== undefined && trip !== null) {
            const path = 'trip/' + trip.pk + '/checklist/';
            getMethodBackendAPI(path).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setChecklists(res);
                    });
                }
            }).catch((err)=>{
            });
        }
    }, [trip]);

    useEffect(()=>{
        if (checklists !== null) {
            console.log(checklists)
            setDisplay(checklists.map((cur)=>{
                return (
                    <>
                        <CardGroup>
                            <Card>
                                <Row>
                                    <Col>{cur.fields.assignee}</Col>
                                    <Col>{cur.fields.item}</Col>
                                    <Col>{cur.fields.comment}</Col>

                                    <Col>
                                        <Button id="edit-btn" onClick={()=>{
                                            navigate('/edit/checklist/' + cur.pk);
                                        }}>View</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </CardGroup>
                    </>
                );
            }));
        }
    }, [checklists, navigate]);

 
    return (
        <>
            <CardGroup>
                <Card>
                    <Row>
                        <Col><b>Assignee</b></Col>
                        <Col><b>Item</b></Col>
                        <Col><b>Comment</b></Col>
                        <Col><b>Action</b></Col>
                    </Row>
                </Card>
            </CardGroup>
            { (checklists !== null) ? (
            <>
                {display}
            </>) : (<></>) }
            <CardGroup>
                <Card>
                    <Row>
                        <Col>
                            <Button id="add-item-btn" onClick={()=>{
                                navigate('/new/checklist/');
                            }}>Add Item</Button>
                        </Col>
                    </Row>
                </Card>
            </CardGroup>
        </>
        );
    };

export default ChecklistComponent;
