import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI, postMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, CardGroup, Card } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const MemberComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            const path2 = 'member/all/';
            getMethodBackendAPI(path2).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setAllMembers(res);
                    });
                }
            }).catch((err)=>{
            });
        }
    }, []);

    useEffect(()=>{
        if (members !== null) {
            setDisplay(members.map((cur)=>{
                return (
                    <>
                        <CardGroup>
                            <Card>
                                <Row>
                                <Col>{cur.pk}</Col>
                                    <Col>{cur.fields.name}</Col>
                                    <Col>
                                        <Button variant="danger" onClick={()=>{
                                            if (window.confirm('Conform to remove?')) {
                                                const path = 'trip/' + trip.pk + '/members/';
                                                const obj = {
                                                    'user_id': selected.pk
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
    }, [members]);

    useEffect(()=>{
        if (allMembers !== null) {
            setOptions(allMembers.map((cur)=>{
                return (
                    <>
                        <Dropdown.Item eventKey={cur.pk}>{cur.fields.name}</Dropdown.Item>
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
                        <Col><h1>{ trip.fields.name }</h1></Col>
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
                            <Dropdown onSelect={(cur)=>{
                                allMembers.map((curM)=>{
                                    if (curM.pk === Number(cur)) {
                                        setSelected(curM);
                                    }
                                });
                                }}>
                                <Dropdown.Toggle variant="success" id="new-member">
                                    { (selected !== null) ? (<>{selected.fields.name}</>) : (<></>) }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    { (options !== null) ? (<>{options}</>) : (<></>) }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button onClick={()=>{
                                if (selected !== null) {
                                    let exist = false;
                                    if (members !== null) {
                                        members.map((cur)=>{
                                            if (cur.pk === selected.pk) {
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