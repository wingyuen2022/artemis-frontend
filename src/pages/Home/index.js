import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HomeComponent from '../../components/HomeComponent';

const Home = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <h1>Home</h1>
                <HomeComponent />
            </>
        )
    };

    return renderHTML();
};
export default Home;