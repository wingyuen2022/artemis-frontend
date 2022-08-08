import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const BudgetForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);
    const chat = useSelector(state => state.chatReducer);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <input id="id" type="number" name="id" hidden/><br />
                    <input id="item" type="text" name="item" maxlength="20" placeholder="Item"/><br />
                    <input id="price" type="number" name="price" default="0" placeholder="Price"/><br />
                    <input id="remark" type="text" name="remark" maxlength="1024" placeholder="remark"/><br />
                    <Button variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/budget');
                        }
                    }}>Delete</Button>
                    <Button onClick={()=>{
                        alert('saved');
                        navigate('/view/budget');
                    }}>Save</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default BudgetForm;