import { useNavigate } from "react-router-dom";
import { Button, Container }from 'react-bootstrap';
import ChecklistComponent from '../../components/ChecklistComponent';
import * as camp from "../../assets/images/camping";
import "./Checklist.css";

const Checklist = () => {
    const navigate = useNavigate();
    const renderHTML = () => {
        return (
            <>
            <Container className="camping-checklist">
                <div>
                    <img className="caravan-icon" src={camp.caravan} alt="caravan"></img>
                    <h4>Make sure you have everything you need with this handy checklist!</h4>
                </div>
            <div className="row">
                    <div className="col">
                        <ChecklistComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Button id="back-btn" onClick={()=>{
                            navigate('/view/trip/all');
                        }}>Back</Button>
                    </div>
                </div>
            </Container>
            </>
        );
    }
    return renderHTML();
}

export default Checklist;