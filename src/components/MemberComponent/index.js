import React, { useEffect } from 'react'
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const MemberComponent = () => {
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);
    const chat = useSelector(state => state.chatReducer);

    useEffect(()=>{

    }, []);

    const renderHTML = () => {
    return (
        <>
            <h1>Member Component</h1>
        </>
        );
    };

    return renderHTML();
}

export default MemberComponent;