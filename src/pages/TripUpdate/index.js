import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import TripForm from '../../components/TripForm';

const Trip = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    dispatch(setTitle("Edit Trip"));

    useEffect(()=>{
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <TripForm id={id} />
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Trip;