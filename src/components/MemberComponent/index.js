import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import Button from 'react-bootstrap/Button';
import "./MemberComponent.css";
import { Container } from 'react-bootstrap';

const MemberComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Trip Members"));
    
    const renderHTML = () => {
    return (
        <>
            <Container className="member-comp-container">
            <div className="row member-form">
                <div className="col">
                    <b>Name</b>
                </div>
                <div className="col">
                    <b>Action</b>
                </div>
            
            <div className="row">
                <div className="col">
                    Wing
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/1');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Edgar
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/2');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Sam
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/3');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Nathan
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/4');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Summira
                </div>
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/edit/member/5');
                    }}>Edit</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={()=>{
                        navigate('/new/member');
                    }}>New Member</Button>
                </div>
            </div>
            </div>
            </Container>
        </>
        );
    };

    return renderHTML();
}

export default MemberComponent;