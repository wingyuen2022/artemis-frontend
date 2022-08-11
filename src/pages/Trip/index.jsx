import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from "react-bootstrap/Button";
import TripComponent from "../../components/TripComponent";

const Trip = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setTitle("Trip"));

  useEffect(()=>{
  }, []);

  const renderHTML = () => {
    return (
      <>
        <div id="trip" className="row">
          <div className="col">
            <TripComponent id={id} />
          </div>
        </div>
        <div className="row">
            <div className="col">
                <Button id="edit-btn" onClick={()=>{
                    navigate('/view/trip/all');
                }}>Back</Button>
            </div>
        </div>
      </>
    );
  };

  return renderHTML();
};
export default Trip;
