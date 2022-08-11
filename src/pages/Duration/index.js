import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from "react-bootstrap/Button";
import CalendarComponent from "../../components/CalendarComponent";

const Duration = () => {
  //const { xxx } = useParams();
  //const [ curXXX, setCurXXX] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setTitle("Duration"));

  const handleBack = () => {
    navigate("-1");
  };

  const handleEdit = () => {
    navigate("/edit/duration");
  };

  useEffect(() => {}, []);

  const renderHTML = () => {
    return (
      <>
        <div className="row">
          <div className="col">
            <CalendarComponent />
          </div>
        </div>
      </>
    );
  };

  return renderHTML();
};
export default Duration;
