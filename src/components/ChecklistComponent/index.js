import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMethodBackendAPI } from '../../util/util.js';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, CardGroup, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
//import CheckListItem from './CheckListItem';
//import ChecklistForm from './ChecklistForm';
//import * as camp from "../../assets/images/camping";
//import "./Checklist.css";

//const tasks = [{ name: "tent, tent pegs & mallet", done: false}]

const ChecklistComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    }, []);

    useEffect(()=>{
        if (checklists !== null) {
            console.log(checklists)
            setDisplay(checklists.map((cur)=>{
                return (
                    <>
                        <CardGroup>
                            <Card>
                                <Row>
                                    <Col>{cur.fields.name}</Col>
                                    <Col>{cur.fields.item}</Col>
                                    <Col>{cur.fields.remark}</Col>
                                    <Col>
                                        <Button onClick={()=>{
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
    }, [checklists]);

    /*const [ items, setItems ] = useState(tasks);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
    let count = 0;
    items.map(item => (!item.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} item`;
  });

  const _handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");

  const newArr = items.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setItems(newArr);
    setInputValue("");
  };

  const _handleBntClick = ({ type, index }) => {
    const newArr = items.slice();
    // if (type === "remove") newArr.splice(index, 1);
    if (type === "completed") newArr[index].done = true;

    return setItems(newArr);
  };*/

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
                        <Col><b>In-charge</b></Col>
                        <Col><b>Item</b></Col>
                        <Col><b>Remark</b></Col>
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
                            <Button onClick={()=>{
                                navigate('/new/checklist/');
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

export default ChecklistComponent;

/*
<Container className="camping-checklist">
                <img className="caravan" src={camp.caravan} alt="caravan"></img>
               
                       
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