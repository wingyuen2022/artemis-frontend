import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from "react-bootstrap/Button";

const Settings = () => {
  //const { xxx } = useParams();
  //const [ curXXX, setCurXXX] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setTitle("Settings"));

  const handleSave = () => {
    alert("saved");
    navigate("-1");
  };

  useEffect(() => {}, []);

  const renderHTML = () => {
    return (
      <>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </>
    );
  };

  return renderHTML();
};
export default Settings;
