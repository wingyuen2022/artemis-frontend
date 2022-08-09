import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import { useParams } from "react-router-dom";
import HomeComponent from '../../components/HomeComponent';

const Home = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const dispatch = useDispatch();
    dispatch(setTitle("Home"));

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <HomeComponent />
            </>
        )
    };

    return renderHTML();
};
export default Home;