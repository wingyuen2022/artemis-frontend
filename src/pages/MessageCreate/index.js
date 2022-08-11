import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from 'react-bootstrap/Button';
import MessageForm from '../../components/MessageForm';

const Messaging = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
 const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <MessageForm />
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Messaging;