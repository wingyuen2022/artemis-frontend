import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import MemberComponent from '../../components/MemberComponent';

const Member = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trip = useSelector(state => state.tripReducer);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <MemberComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button id="back-btn" onClick={()=>{
                            navigate('/view/trip/' + trip.pk);
                        }}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

  return renderHTML();
};
export default Member;
