import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import ChecklistComponent from '../../components/ChecklistComponent';

function Checklist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    dispatch(setTitle("Check List"));

    useEffect(()=>{

    }, []);

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