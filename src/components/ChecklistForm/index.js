import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI, postMethodBackendAPI, putMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Dropdown, Row, Col } from "react-bootstrap";
import "../ChecklistComponent/Checklist.css";

const ChecklistForm = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);
    const [checklist, setChecklist] = useState(null);
    const [allMembers, setAllMembers] = useState(null);
    const [options, setOptions] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(()=>{
        if (id !== undefined && id !== null) {
            const path1 = 'trip/' + trip.pk + '/checklist/';
            getMethodBackendAPI(path1).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setChecklist(res[0]);
                    });
                }
            }).catch((err)=>{
            });
        }
        const path2 = 'user/all/';
        getMethodBackendAPI(path2).then((ret)=>{
            if (ret.ok) {
                ret.json().then((res)=>{
                    setAllMembers(res);
                });
            }
        }).catch((err)=>{
        });
    }, [id, trip]);

    useEffect(()=>{
        if (checklist !== null) {
            const obj = checklist.fields;
            const assignee = document.getElementById("assignee");
            if (assignee !== undefined && assignee !== null) {
                assignee.value = Number(obj.assignee);
            }
            const item = document.getElementById("item");
            if (item !== undefined && item !== null) {
                item.value = obj.item;
            }
            const comment = document.getElementById("comment");
            if (comment !== undefined && comment !== null) {
                comment.value = obj.comment;
            }
        }
    }, [checklist]);

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
        <Container className="new-item-container">
            <h2>Add an Item:</h2>
            <Row>
                <Col>
                    <Dropdown  onSelect={(cur)=>{
                        allMembers.map((curM)=>{
                            if (curM.pk === Number(cur)) {
                                setSelected(curM);
                            }
                        });
                        }}>
                        <Dropdown.Toggle id="assignee">Assignee:
                            { (selected !== null) ? (<>{selected.fields.username}</>) : (<></>) }
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="assignee-dropdown-container">
                            { (options !== null) ? (<>{options}</>) : (<></>) }
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="new-item-form">
                    <b>Item:</b><input id="item" type="text" name="item" maxLength="20" placeholder="Item"/><br />
                    <b>Comment:</b><input id="comment" type="message" name="comment" maxLength="1024" placeholder="comment"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button id="back-btn" role="back" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/checklist');
                        }
                    }}>Back</Button>
                    <Button id="delete-btn" role="deleted" variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            const path = 'trip/' + trip.pk + '/checklist/';
                            const obj = {
                                'item_id': Number(id)
                            };
                            deleteMethodBackendAPI(path, obj).then((ret)=>{
                                if (ret.ok) {
                                    alert('deleted');
                                    navigate('/view/checklist');
                                }
                            }).catch((err)=>{
                            });
                        }
                    }} hidden={id === null}>Delete</Button>
                    <Button id="save-btn" role="save" onClick={()=>{
                        const item = document.getElementById("item");
                        if (item === undefined || item === null || item.value === "") {
                            alert('Enter item');
                            return;
                        }
                        const comment = document.getElementById("comment");
                        if (comment === undefined || comment === null || comment.value === "") {
                            alert('Enter comment');
                            return;
                        }
                        const path = 'trip/' + trip.pk + '/checklist/';
                        if (id !== undefined && id !== null) {
                            const obj = {
                                'item_id': Number(id),
                                'assignee': Number(selected.pk),
                                'item': item.value,
                                'comment': comment.value
                            };
                            putMethodBackendAPI(path, obj).then(()=>{
                                alert('saved');
                                navigate('/view/checklist');
                            }).catch((err)=>{
                            });
                        } else {
                            const obj = {
                                'assignee': Number(selected.pk),
                                'item': item.value,
                                'comment': comment.value
                            };
                            postMethodBackendAPI(path, obj).then(()=>{
                                alert('saved');
                                navigate('/view/checklist');
                            }).catch((err)=>{
                            });
                        }
                    }}>Save</Button>
                </Col>
            </Row>
            </Container>
        </>
        );
    };

    return renderHTML();
}

export default ChecklistForm;