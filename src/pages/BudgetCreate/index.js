import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import BudgetComponent from '../../components/BudgetComponent';

const Budget = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Budget</h1>
                <BudgetComponent />
            </>
        )
    };

    return renderHTML();
};
export default Budget;