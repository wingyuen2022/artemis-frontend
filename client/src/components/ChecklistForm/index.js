import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

const ChecklistForm = ({id}) => {
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
                    <b>Item:</b><input id="item" type="text" name="item" maxLength="20" placeholder="Item"/><br />
                    <b>Remark:</b><input id="remark" type="text" name="remark" maxLength="1024" placeholder="Remark"/><br />
                    <b>Assignee:</b><select id="personInCharge" name="personInCharge">
                        <option value="Wing">Wing</option>
                        <option value="Edgar">Edgar</option>
                        <option value="Sam">Sam</option>
                        <option value="Nathan">Nathan</option>
                        <option value="Summira">Summira</option>
                    </select><br />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input id="id" type="number" name="id" hidden/><br />
                    <Button role="back" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/checklist');
                        }
                    }}>Back</Button>
                    <Button role="deleted" variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/checklist');
                        }
                    }} hidden={id === null}>Delete</Button>
                    <Button role="save" onClick={()=>{
                        alert('saved');
                        navigate('/view/checklist');
                    }}>Save</Button>
                </div>
            </div>
        </>
        );
    };

    return renderHTML();
}

export default ChecklistForm;