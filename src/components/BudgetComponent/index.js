import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getMethodBackendAPI } from '../../util/util.js';
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col, CardGroup, Card } from "react-bootstrap";


const BudgetComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const trip = useSelector(state => state.tripReducer);
    const [budgets, setBudgets] = useState(null);
    const [display, setDisplay] = useState(null);

    useEffect(()=>{
        if (trip !== undefined && trip !== null) {
            const path = 'trip/' + trip.pk + '/budget/';
            getMethodBackendAPI(path).then((ret)=>{
                if (ret.ok) {
                    ret.json().then((res)=>{
                        setBudgets(res);
                    });
                }
            }).catch((err)=>{
            });
        }
    }, []);

    useEffect(()=>{
        if (budgets !== null) {
            setDisplay(budgets.map((cur)=>{
                return (
                    <>
                        <CardGroup>
                            <Card>
                                <Row>
                                    <Col>{cur.fields.item}</Col>
                                    <Col>{cur.fields.price}</Col>
                                    <Col>{cur.fields.remark}</Col>
                                    <Col>
                                        <Button onClick={()=>{
                                            navigate('/edit/budget/' + cur.pk);
                                        }}>Edit</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </CardGroup>
                    </>
                );
            }));
        }
    }, [budgets]);

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
                        <Col><b>Item</b></Col>
                        <Col><b>Price</b></Col>
                        <Col><b>Remark</b></Col>
                        <Col><b>Action</b></Col>
                    </Row>
                </Card>
            </CardGroup>
            { (budgets !== null) ? (
            <>
                {display}
            </>) : (<></>) }
            <CardGroup>
                <Card>
                    <Row>
                        <Col>
                            <Button onClick={()=>{
                                navigate('/new/budget/');
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

export default BudgetComponent;