import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI, postMethodBackendAPI, putMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

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
    }, []);

    useEffect(()=>{
        if (checklist !== null) {
            const obj = checklist.fields;
            /*const personInCharge = document.getElementById("personInCharge");
            if (personInCharge !== undefined && personInCharge !== null) {
                personInCharge.value = Number(obj.personInCharge);
            }*/
            const item = document.getElementById("item");
            if (item !== undefined && item !== null) {
                item.value = obj.item;
            }
            const remark = document.getElementById("remark");
            if (remark !== undefined && remark !== null) {
                remark.value = obj.remark;
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
            <Row>
                <Col>
                    <Dropdown onSelect={(cur)=>{
                        allMembers.map((curM)=>{
                            if (curM.pk === Number(cur)) {
                                setSelected(curM);
                            }
                        });
                        }}>
                        <Dropdown.Toggle variant="success" id="personInCharge">
                            { (selected !== null) ? (<>{selected.fields.username}</>) : (<></>) }
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            { (options !== null) ? (<>{options}</>) : (<></>) }
                        </Dropdown.Menu>
                    </Dropdown>
                    <b>Item:</b><input id="item" type="text" name="item" maxLength="20" placeholder="Item"/><br />
                    <b>Remark:</b><input id="remark" type="text" name="remark" maxLength="1024" placeholder="Remark"/><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button role="back" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/checklist');
                        }
                    }}>Back</Button>
                    <Button role="deleted" variant="danger" onClick={()=>{
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
                    <Button role="save" onClick={()=>{
                        const item = document.getElementById("item");
                        if (item === undefined || item === null || item.value === "") {
                            alert('Enter item');
                            return;
                        }
                        const remark = document.getElementById("remark");
                        if (remark === undefined || remark === null || remark.value === "") {
                            alert('Enter remark');
                            return;
                        }
                        const path = 'trip/' + trip.pk + '/checklist/';
                        if (id !== undefined && id !== null) {
                            const obj = {
                                'item_id': Number(id),
                                'person_in_charge': Number(selected.pk),
                                'item': item.value,
                                'remark': remark.value
                            };
                            putMethodBackendAPI(path, obj).then(()=>{
                                alert('saved');
                                navigate('/view/checklist');
                            }).catch((err)=>{
                            });
                        } else {
                            const obj = {
                                'person_in_charge': Number(selected.pk),
                                'item': item.value,
                                'remark': remark.value
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
        </>
        );
    };

    return renderHTML();
}

export default ChecklistForm;