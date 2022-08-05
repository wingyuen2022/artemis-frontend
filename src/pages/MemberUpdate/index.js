import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MemberComponent from '../../components/MemberComponent';

const Member = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Member</h1>
                <MemberComponent />
            </>
        )
    };

    return renderHTML();
};
export default Member;