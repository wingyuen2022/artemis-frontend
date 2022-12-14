import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

const NotFound = () => {
    const navigate = useNavigate();
    return (
    <>
    <h1>Sorry, something went wrong. This page could not be found!</h1>);
    <div className="row">
            <div className="col">
                <Button onClick={()=>{
                    navigate(-1);
                }}>Go Back</Button>
            </div>
        </div>
    </>
    )
};
export default NotFound;