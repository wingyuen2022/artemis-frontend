import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ChecklistForm from '../../components/ChecklistForm';

const Checklist = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <ChecklistForm id={null} />
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Checklist;