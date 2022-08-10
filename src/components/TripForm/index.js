import { useNavigate } from "react-router-dom";
import { Button,  Container, Form, FormLabel, Row } from "react-bootstrap";
import "./TripForm.css";

const TripForm = ({id}) => {
    const navigate = useNavigate();
    
    const renderHTML = () => {
    return (
        <>
            <Container className="trip-form-container">
            <Form className="new-trip-form">
                <FormLabel className="form-label">
                    <b>Trip name:</b>
                </FormLabel>
                <input className="form-item-input" id="name" type="text" name="name" maxLength="20" placeholder="Name"/>
                <br />
               
        
            
                <FormLabel className="form-label">
                    <b>Public or Private:</b>
                </FormLabel>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <input className="form-item-input" type="radio" id="public" name="public" value="true" checked></input>
                            <FormLabel className="form-label"  for="public">Public</FormLabel>
                        </div>
                        <div className="col">
                            <input className="form-item-input" type="radio" id="private" name="public" value="false"></input><FormLabel className="form-label" for="private">Private</FormLabel>
                        </div>
                    </div>
                </div>
           
                <FormLabel className="form-label">
                    <b>Location:</b>
                </FormLabel>
                <div className="col">
                    <input className="form-item-input" id="location" type="text" name="location" maxLength="20" placeholder="Location"/><br />
                </div>
            
                <FormLabel className="form-label">
                    <b>Start Date:</b>
                </FormLabel>
                <div className="col">
                    <input className="form-item-input" id="startDate" class="inputs" name="startDate" type="date" required />
                </div>
            
                <FormLabel className="form-label">
                    <b>End Date:</b>
                </FormLabel>
                <div className="col">
                    <input className="form-item-input" id="endDate" class="inputs" name="endDate" type="date" required />
                </div>
            
                <Row className="row">
                    <input className="form-item-input" id="id" type="number" name="id" hidden/><br />
                    <Button id="back-button" onClick={()=>{
                        if (window.confirm("Confirm without saving?")) {
                            navigate('/view/home');
                        }
                    }}>Go Back</Button>
                    <Button variant="danger" onClick={()=>{
                        if (window.confirm("Confirm to delete?")) {
                            alert('deleted');
                            navigate('/view/home');
                        }
                    }} hidden={id === null}>Delete</Button>
                    <Button id="save-button" onClick={()=>{
                        alert('saved');
                        navigate('/view/home');
                    }}>Save Trip</Button>
                </Row>
            </Form>
            </Container>
        </>
        );
    };

    return renderHTML();
}

export default TripForm;