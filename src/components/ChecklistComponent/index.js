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
            setDisplay(checklists.map((cur)=>{
                return (
                    <>
                        <CardGroup>
                            <Card>
                                <Row>
                                    <Col>{cur.fields.assignee}</Col>
                                    <Col>{cur.fields.item}</Col>
                                    <Col>{cur.fields.note}</Col>
                                    <Col>
                                        <Button id="edit-btn" onClick={()=>{
                                            navigate('/edit/checklist/' + cur.pk);
                                        }}>Edit</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </CardGroup>
                    </>
                );
            }));
        }
    }, [checklists, navigate]);

    const renderHTML = () => {
    return (
        <>
            <CardGroup>
                <Card>
                    <Row>
                        <Col><h1>{ trip.fields.name }</h1></Col>
                    </Row>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Row>
                        <Col><b>Assignee</b></Col>
                        <Col><b>Item</b></Col>
                        <Col><b>Note</b></Col>
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

    return renderHTML();
}

export default ChecklistComponent;

/*
                     
                <Fragment className="checklistform-container">
                <ChecklistForm
                    id="checklist-form"
                    onSubmit={_handleSubmit}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    />
                    <Row className="check-list">
                      <Col>
                        {items.map((item, index) => (
                        <CheckListItem
                            key={index}
                            item={item}
                            completed={() => _handleBntClick({ type: "completed", index })}
                            className="checklist-item"
                            />
                          ))}
                        </Col>
                    </Row>
                </Fragment>
            </Container>
*/