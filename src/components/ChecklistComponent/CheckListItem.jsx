import "./css/ChecklistItem.css";

export default function CheckListItem(props) {
    const { amount, name, done } = props.item;
    return (
      <div className="checklist-item-container">
        <li className="checklist-item" style={{ textDecoration: done ? "line-through" : "" }}>
          {amount}
          {name}
          {!done ? <button id="completed-item-btn" onClick={props.completed}>Done</button> : ""}
          <button id="remove-item-btn" onClick={props.remove}>-</button>
        </li>
        <select title="Assigned to:">
          <option value="Anyone">Anyone</option>
          <option value="Edgar">Edgar</option>
          <option value="Nathan">Nathan</option>
          <option value="Sam">Sam</option>
          <option value="Summira">Summira</option>
          <option value="Wing">Wing</option>
        </select>
      </div>
    );
  }
  