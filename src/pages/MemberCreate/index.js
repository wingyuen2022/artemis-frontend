import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import MemberForm from '../../components/MemberForm';

const Member = () => {
    //const { xxx } = useParams();
    //const [ curXXX, setCurXXX] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("New Member"));

	const handleNext = () => {
		navigate('/new/duration');
	};

    useEffect(()=>{
        
    }, []);

    const renderHTML = () => {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <MemberForm />
                    </div>
                    <div className="col">
                        <Button onClick={handleNext}>Next</Button>
                    </div>
                </div>
            </>
        )
    };

    return renderHTML();
};
export default Member;