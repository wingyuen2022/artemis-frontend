import React, { useState, useEffect, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import CheckListItem from './CheckListItem';
import ChecklistForm from './ChecklistForm';
import * as camp from "../../assets/images/camping";
import "./Checklist.css";


const tasks = [{ name: "task1", done: false}]

const ChecklistComponent = () => {
    const [ items, setItems ] = useState(tasks);
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
  };

    const renderHTML = () => {
    return (
        <>
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
        </>
        );
    };

    return renderHTML();
}

export default ChecklistComponent;