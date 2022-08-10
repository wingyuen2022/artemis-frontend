import "./Buttons.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
    const navigate = useNavigate();

    const handleBack = () => {
		navigate(-1);
	};
    return (

        <Button id="back-btn" type="submit" onClick={handleBack}>Go Back</Button>
    )
}