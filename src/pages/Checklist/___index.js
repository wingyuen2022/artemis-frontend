import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMethodBackendAPI } from '../../util/util.js';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { setTitle } from "../../actions";
import { Button, Container } from "react-bootstrap";
import { caravan } from "../../assets/images/camping";
import "./Checklist.css";

export default function Checklist(id) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setTitle("Checklist"));
  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(1);
  const trip = useSelector(state => state.tripReducer);
  const [checklists, setChecklists] = useState(null);
  const [display, setDisplay] = useState(null);
  
  //Initial tasks
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);
  
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
    const handleAddButtonClick = () => {
      const newItem = {
        itemName: inputValue,
        quantity: 1,
        isSelected: false,
      };
  
      const newItems = [...items, newItem];
  
      setItems(newItems);
      setInputValue('');
      calculateTotal();

    };

      const handleQuantityIncrease = (index) => {
        const newItems = [...items];
    
        newItems[index].quantity++;
    
        setItems(newItems);
        calculateTotal();
      };

      const handleQuantityDecrease = (index) => {
        const newItems = [...items];
    
        newItems[index].quantity--;
    
        setItems(newItems);
        calculateTotal();
      };

      const toggleComplete = (index) => {
        const newItems = [...items];
    
        newItems[index].isSelected = !newItems[index].isSelected;
    
        setItems(newItems);
      };

      const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
          return total + item.quantity;
        }, 0);
    
        setTotalItemCount(totalItemCount);
      };

      useEffect(() => {
        if (checklists !== null) {
          console.log(checklists)
        }
      }, [checklists]);

      return (<h1>Testing</h1>);
}


/*
useEffect(() => {
        if (checklists !== null) {
          console.log(checklists)
            setDisplay(checklists.map((cur) => {
 
  return (
    <>
      <Container className="camping-checklist">
        <div>
            <img className="caravan-icon" src={caravan} alt="caravan"></img>
            <h4>Make sure you have everything you need with this handy checklist!</h4>
        </div>
        <div className="checklist-add-item">
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' /><FontAwesomeIcon className="add-btn" icon={faPlus} onClick={() => handleAddButtonClick()} />
        </div>

        <div className="checklist-list">
          {items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
              <div className="assignee">
                  <select id="assignee" name="assignee">
                      <option value="Anyone">Anyone</option>
                      <option value="Edgar">Edgar</option>
                      <option value="Nathan">Nathan</option>
                      <option value="Sam">Sam</option>
                      <option value="Summira">Summira</option>
                      <option value="Wing">Wing</option>
                  </select>
              </div>
						</div>
					))}
          
          <div className='total'>Total: {totalItemCount}</div>
        
          { (checklists !== null) ? (
            <>
                {display}
            </>) : (<></>) }
            <div className="btn-container">
                <div className="btn-row">
                    <input id="id" type="number" name="id" hidden/><br />
                    <Button id="back-btn" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('-1');
                        }
                    }}>Back</Button>

                    <Button id="delete-btn" variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/checklist');
                        }
                    }} hidden={id === null}>Delete</Button>

                    <Button id="save-btn" onClick={()=>{
                        alert('saved');
                        navigate('/view/checklist');
                    }}>Save</Button>

                    <Button id="edit-btn" onClick={()=>{
                        navigate('/edit/checklist/' + cur.pk);
                    }}>Edit</Button>

                    <Button onClick={()=>{
                        navigate('/new/checklist/');
                    }}>Add</Button>
                </div>
              </div>
            </div>
      </Container>
    </>
  ), [checklists];
  }))
 }})
*/