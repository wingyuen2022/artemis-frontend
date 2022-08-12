import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Settings = () => {

  const navigate = useNavigate();

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
