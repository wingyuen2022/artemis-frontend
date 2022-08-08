import "./Buttons.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ChecklistEditItemBtn() {
    const navigate = useNavigate();
    const handleEdit = () => {
		navigate('/edit/checklist');
	};

    return (

        <Button id="edit-item-btn" type="submit" onClick={handleEdit}>Edit List</Button>
    )
}