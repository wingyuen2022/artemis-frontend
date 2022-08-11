import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI, postMethodBackendAPI, putMethodBackendAPI, deleteMethodBackendAPI } from '../../util/util.js';
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col } from "react-bootstrap";

const BudgetForm = ({id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);
    const [budget, setBudget] = useState(null);

    useEffect(()=>{
        if (id !== undefined && id !== null) {
            const path = 'trip/' + trip.pk + '/budget/';
            getMethodBackendAPI(path).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setBudget(res[0]);
                    });
                }
            }).catch((err)=>{
            });
        }
    }, [id, trip.pk]);

    useEffect(()=>{
        if (budget !== null) {
            const obj = budget.fields;
            const item = document.getElementById("item");
            if (item !== undefined && item !== null) {
                item.value = obj.item;
            }
            const price = document.getElementById("price");
            if (price !== undefined && price !== null) {
                price.value = Number(obj.price);
            }
            const remark = document.getElementById("remark");
            if (remark !== undefined && remark !== null) {
                remark.value = obj.remark;
            }
        }
    }, [budget]);

    const renderHTML = () => {
    return (
        <>
            <Row>
                <Col>
                    <b>Item:</b><input id="item" type="text" name="item" maxLength="20" placeholder="Item"/><br />
                    <b>Price:</b><input id="price" type="number" name="price" default="0" placeholder="Price"/><br />
                    <b>Remark:</b><input id="remark" type="text" name="remark" maxLength="1024" placeholder="remark"/><br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/budget');
                        }
                    }}>Back</Button>
                    <Button variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            const path = 'trip/' + trip.pk + '/budget/';
                            const obj = {
                                'item_id': Number(id)
                            };
                            deleteMethodBackendAPI(path, obj).then((ret)=>{
                                if (ret.ok) {
                                    alert('deleted');
                                    navigate('/view/budget');
                                }
                            }).catch((err)=>{
                            });
                        }
                    }} hidden={id === null}>Delete</Button>
                    <Button onClick={()=>{
                        const item = document.getElementById("item");
                        if (item === undefined || item === null || item.value === "") {
                            alert('Enter item');
                            return;
                        }
                        const price = document.getElementById("price");
                        if (price === undefined || price === null || price.value === "") {
                            alert('Enter price');
                            return;
                        }
                        const remark = document.getElementById("remark");
                        if (remark === undefined || remark === null || remark.value === "") {
                            alert('Enter remark');
                            return;
                        }
                        const path = 'trip/' + trip.pk + '/budget/';
                        if (id !== undefined && id !== null) {
                            const obj = {
                                'item_id': Number(id),
                                'item': item.value,
                                'price': Number(price.value),
                                'remark': remark.value
                            };
                            putMethodBackendAPI(path, obj).then(()=>{
                                alert('saved');
                                navigate('/view/budget');
                            }).catch((err)=>{
                            });
                        } else {
                            const obj = {
                                'item': item.value,
                                'price': Number(price.value),
                                'remark': remark.value
                            };
                            postMethodBackendAPI(path, obj).then(()=>{
                                alert('saved');
                                navigate('/view/budget');
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

export default BudgetForm;