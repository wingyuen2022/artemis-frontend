import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ChecklistComponent from '../../components/ChecklistComponent';

const Checklist = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
		navigate('-1');
	};

    const handleEdit = () => {
		navigate('/edit/checklist');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <h1>View checklist</h1>
                    </div>
                    <div className="col">
                        <ChecklistComponent />
                    </div>
                    <div className="col">
                        <Button onClick={handleBack}>Back</Button>
                        <Button onClick={handleEdit}>Edit</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Checklist;