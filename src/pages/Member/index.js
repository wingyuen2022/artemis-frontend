import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import MemberComponent from '../../components/MemberComponent';

const Member = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Members"));

  useEffect(() => {}, []);

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
                        <Button onClick={()=>{
                            navigate('/view/trip/1');
                        }}>Back</Button>
                    </div>
                </div>
            </>
        )
    };

  return renderHTML();
};
export default Member;
