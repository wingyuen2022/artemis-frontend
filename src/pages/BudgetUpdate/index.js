import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import BudgetForm from '../../components/BudgetForm';

const Budget = () => {
    const { id } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
   
    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <BudgetForm id={id} />
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Budget;