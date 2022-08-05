import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MemberComponent from '../../components/MemberComponent';

const Member = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
		navigate('-1');
	};

    const handleEdit = () => {
		navigate('/edit/member');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <h1>View member</h1>
                    </div>
                    <div className="col">
                        <MemberComponent />
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
export default Member;