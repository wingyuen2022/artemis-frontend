import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI, postMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';
import { useSelector } from "react-redux";
import { Container, Dropdown, Button, Row, Col, CardGroup, Card } from "react-bootstrap";

import "./MemberComponent.css";

const MemberComponent = () => {
    const navigate = useNavigate();
    const trip = useSelector(state => state.tripReducer);
    const [members, setMembers] = useState(null);
    const [allMembers, setAllMembers] = useState(null);
    const [display, setDisplay] = useState(null);
    const [options, setOptions] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(()=>{
        if (trip !== undefined && trip !== null) {
            const path1 = 'trip/' + trip.pk + '/members/';
            getMethodBackendAPI(path1).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setMembers(res);
                    });
                }
            }).catch((err)=>{
            });
            const path2 = 'user/all/';
            getMethodBackendAPI(path2).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setAllMembers(res);
                    });
                }
            }).catch((err)=>{
            });
        }
    }, [trip]);

    useEffect(()=>{
        if (members !== null) {
            setDisplay(members.map((cur)=>{
                return (
                    <>
                        <CardGroup>
                            <Card>
                                <Row>
                                    <Col>{cur.fields.name}</Col>
                                    <Col>
                                        <Button variant="danger" onClick={()=>{
                                            if (window.confirm('Conform to remove?')) {
                                                const path = 'trip/' + trip.pk + '/members/';
                                                const obj = {
                                                    'user_id': Number(cur.fields.member)
                                                };
                                                deleteMethodBackendAPI(path, obj).then((ret)=>{
                                                    if (ret.ok) {
                                                        alert('deleted');
                                                        navigate('/view/trip/' + trip.pk);
                                                    }
                                                }).catch((err)=>{
                                                });
                                            }
                                        }}>Remove</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </CardGroup>
                    </>
                );
            }));
        }
    }, [members, navigate, trip.pk]);

    useEffect(()=>{
        if (allMembers !== null) {
            setOptions(allMembers.map((cur)=>{
                return (
                    <>
                        <Dropdown.Item eventKey={cur.pk}>{cur.fields.username}</Dropdown.Item>
                    </>
                );
            }));
        }
    }, [allMembers]);

    const renderHTML = () => {
    return (
        <>
            <CardGroup>
                <Card>
                    <Row>
                        <Col><h1>{ trip.fields.username }</h1></Col>
                    </Row>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Row>
                        <Col><b>Member</b></Col>
                        <Col><b>Action</b></Col>
                    </Row>
                </Card>
            </CardGroup>
            { (members !== null) ? (
            <>
                {display}
            </>) : (<></>) }
            <CardGroup>
                <Card>
                    <Row>
                        <Col>
                            <Dropdown onSelect={(cur) => {
                                allMembers.map((curM) => {
                                    if (curM.pk === Number(cur)) {
                                        setSelected(curM);
                                    }
                                });
                                }}>
                                <Dropdown.Toggle variant="success" id="new-member">
                                    { (selected !== null) ? (<>{selected.fields.username}</>) : (<></>) }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { (options !== null) ? (<>{options}</>) : (<></>) }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button onClick={()=>{
                                if (selected !== null) {
                                    let exist = false;
                                    if (members !== null) {
                                        members.map((cur) => {
                                            if (cur.fields.member === selected.pk) {
                                                exist = true;
                                            }
                                        });
                                    }
                                    if (!exist) {
                                        const path = 'trip/' + trip.pk + '/members/';
                                        const obj = {
                                            'user_id': selected.pk
                                        };
                                        postMethodBackendAPI(path, obj).then((ret)=>{
                                            if (ret.ok) {
                                                navigate('/view/trip/' + trip.pk);
                                            }
                                        }).catch((err)=>{
                                        });
                                    } else {
                                        alert('Exist in the list');
                                    }
                                }
                            }}>Add</Button>
                        </Col>
                    </Row>
                </Card>
            </CardGroup>

        </>
        );
    };

    return renderHTML();
}

export default MemberComponent;