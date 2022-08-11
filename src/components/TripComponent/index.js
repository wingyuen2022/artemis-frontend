import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Container, Form, FormLabel, Col } from 'react-bootstrap';
import { setTitle } from "../../actions";
import "./Trip.css";

const TripComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(setTitle("Checklist"));
    const renderHTML = () => {
    return (
        <>
           <Container className="trip-form-container">
            <Form className="new-trip-form">
                <Col>
                    <FormLabel className="form-label">
                        <b>Trip name:</b>
                    </FormLabel>
                    <p className="form-p">
                        Peak District Trip
                    </p>
                </Col>
                <hr />
                <Col>
                    <FormLabel className="form-label">
                        <b>Public or Private:</b>
                    </FormLabel>
                    <p className="form-p">
                        Public
                    </p>
                </Col>
                <hr />
                <Col>
                    <FormLabel className="form-label">
                        <b>Location:</b>
                    </FormLabel>
                    <p className="form-p">
                        Peak district
                    </p>
                </Col>
                <hr />
                <Col>
                    <FormLabel className="form-label">
                        <b>Start Date:</b>
                    </FormLabel>
                    <p className="form-p">
                        2022-08-15
                    </p>
                </Col>
                <hr />
                <Col>
                    <FormLabel className="form-label">
                        <b>End Date:</b>
                    </FormLabel>
                    <p className="form-p">
                        2022-08-21
                    </p>
                </Col>
                <hr />
                <Col>
                    <FormLabel className="form-label">
                        <b>Member:</b>
                    </FormLabel>
                    <div className="col">
                        <Button id="member-btn" onClick={()=>{
                            navigate('/view/member');
                        }}>View Member</Button>
                    </div>
                </Col>
                <hr />
                <Col>
                <FormLabel className="form-label">
                    <b>Budget:</b>
                </FormLabel>
                <div className="col">
                    <Button id="budget-btn" onClick={()=>{
                        navigate('/view/budget');
                    }}>View Budget</Button>
                </div>
                </Col>
                <hr />
                <Col>
                    <FormLabel className="form-label">
                        <b>Checklist:</b>
                    </FormLabel>
                    <div className="col">
                        <Button id="checklist-btn" onClick={()=>{
                            navigate('/view/checklist');
                        }}>View Checklist</Button>
                    </div>
                </Col>
                <hr />
                <div className="col">
                    <Button id="edit-btn" onClick={()=>{
                        navigate('/edit/trip/1');
                    }}>Edit</Button>
                </div>
            </Form>
            </Container>
        </>
        );
    };

    return renderHTML();
}

export default TripComponent;