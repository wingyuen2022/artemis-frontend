import ChecklistComponent from '../../components/ChecklistComponent';
import { ChecklistEditItemBtn, BackBtn } from "../../components/Buttons";
import "./Checklist.css";

const Checklist = () => {

        return (
            <>
                <div className="col">
                    <div className="header">
                        <h1>Checklist</h1>
                    </div>
                    <div className="component-container">
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