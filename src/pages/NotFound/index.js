import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import { Button } from 'react-bootstrap';

const NotFound = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Oops!"));
    return (
    <>
    <h1>Sorry, something went wrong. This page could not be found!</h1>);
    <div className="row">
            <div className="col">
                <Button onClick={()=>{
                    navigate('-1');
                }}>Go Back</Button>
            </div>
        </div>
    </>
    )
};
export default NotFound;