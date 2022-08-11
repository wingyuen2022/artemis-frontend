import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import BudgetComponent from '../../components/BudgetComponent';

const Budget = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);
    
    const navigate = useNavigate();
  

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <BudgetComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button onClick={()=>{
                            navigate('/view/trip/all');
                        }}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Budget;