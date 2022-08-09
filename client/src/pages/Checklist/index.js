import ChecklistComponent from '../../components/ChecklistComponent';
import { ChecklistEditItemBtn, BackBtn } from "../../components/Buttons";
import "./Checklist.css";

const Checklist = () => {

        return (
            <>
                <div className="col">
                    <div>
                        <h1 className="checklist-header">Checklist</h1>
                    </div>
                    <div className="checklist-container">
                        <ChecklistComponent />
                    </div>
                    <div className="checklist-btns">
                        <BackBtn />
                        <ChecklistEditItemBtn />
                    </div>
                </div>
            </>
        )
    };

export default Checklist;