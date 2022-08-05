import React, { useEffect } from 'react'
import { wait } from '../../util/util.js';
import { setTrip, setChat } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

const ItineraryComponent = () => {
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);
    const chat = useSelector(state => state.chatReducer);

    useEffect(()=>{

    }, []);

    const renderHTML = () => {
    return (
        <>
            <h1>Itinerary Component</h1>
        </>
        );
    };

    return renderHTML();
}

export default ItineraryComponent;