import "./Checklist.css";
import ChecklistAddItemBtn from "../Buttons/checklist-add-item";

export default function Form(props) {
    return (
      <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
        <input
          className="add-newitem"
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="Reminder: Trip Checklist!"
        />
        <ChecklistAddItemBtn />
      </form>
    );
  }