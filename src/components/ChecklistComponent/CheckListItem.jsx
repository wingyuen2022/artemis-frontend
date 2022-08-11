// import "./css/ChecklistItem.css";

export default function CheckListItem(props) {
    const { name, done } = props.item;
    return (
      <div className="checklist-item-container">
        <li className="checklist-item" style={{ textDecoration: done ? "line-through" : "" }}>
          {name}
          {!done ? <button id="completed-item-btn" onClick={props.completed}>Done</button> : ""}
          <button id="remove-item-btn" onClick={props.remove}>-</button>
        </li>
      </div>
    );
  }
  