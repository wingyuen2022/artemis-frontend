import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import ChecklistComponent from '../../components/ChecklistComponent';

const Checklist = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Check List"));

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
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
                            navigate('/view/trip/1');
                        }}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Checklist;