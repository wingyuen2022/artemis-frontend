import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import TripComponent from '../../components/TripComponent';

const Trip = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Trip"));

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <TripComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button onClick={()=>{
                            navigate('/view/home');
                        }}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Trip;