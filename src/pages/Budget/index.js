import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import BudgetComponent from '../../components/BudgetComponent';

const Budget = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Budget"));
    const trip = useSelector(state => state.tripReducer);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <BudgetComponent />
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
export default Budget;