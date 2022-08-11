import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import ChecklistComponent from '../../components/ChecklistComponent';
//import { Container } from "react-bootstrap";
//import CheckListItem from "../../components/ChecklistComponent/CheckListItem";
//import ChecklistForm from "../../components/ChecklistComponent/ChecklistForm";
//import {caravan} from "../../assets/images/camping";
//import "./Checklist.css";

//Initial tasks
/*const stuff = [
  { name: "item 1", done: false },
  { name: "item 2", done: false },
  { name: "item 3", done: true }
];*/

function Checklist() {
  //const [items, setItems] = useState(stuff);
  //const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
    dispatch(setTitle("Check List"));

    useEffect(()=>{

    }, []);

  /*useEffect(() => {
    let count = 0;
    items.map(item => (!item.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} item`;
  });

  //
  const _handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("Item name is required");

    const newArr = items.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setItems(newArr);
    setInputValue("");
  };

  //
  const _handleBtnClick = ({ type, index }) => {
    const newArr = items.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return setItems(newArr);
  };*/

  //
  return (
    <>
      <div className="row">
            <div className="col">
                <ChecklistComponent />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Button onClick={()=>{
                    navigate('/view/trip/all');
                }}>Back</Button>
            </div>
        </div>
    </>
  );
}

export default Checklist;

/*
<Container className="camping-checklist">
        <div>
            <img className="caravan-icon" src={caravan} alt="caravan"></img>
            <ChecklistForm  className="checklistform-input"
                    onSubmit={_handleSubmit}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
            />
      </div>
      <ul>
        {items.map((item, index) => (
          <CheckListItem
            key={index}
            item={item}
            remove={() => _handleBtnClick({ type: "remove", index })}
            completed={() => _handleBtnClick({ type: "completed", index })}
          />
        ))}
      </ul>
    </Container>
*/