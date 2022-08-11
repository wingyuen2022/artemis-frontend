import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import TripForm from '../../components/TripForm';

const Trip = () => {
    const { id } = useParams();


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