import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import ChecklistForm from '../../components/ChecklistForm';

const Checklist = () => {
    const { id } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Edit Check List"));

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <ChecklistForm id={id} />
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Checklist;