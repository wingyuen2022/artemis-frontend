import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ChecklistComponent from '../../components/ChecklistComponent';

const Checklist = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Checklist</h1>
                <ChecklistComponent />
            </>
        )
    };

    return renderHTML();
};
export default Checklist;