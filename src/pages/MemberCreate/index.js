import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import MemberForm from '../../components/MemberForm';

const Member = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
 
    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <MemberForm id={null} />
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Member;