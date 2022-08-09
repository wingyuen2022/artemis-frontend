import "./Checklist.css";
import { FcCheckmark } from "react-icons/fc";
// import { RiDeleteBin2Line } from "react-icons/ri";

export default function CheckListItem(props) {
    const { name, done } = props.item;
    return (
      <li className="check-list-item" style={{ textDecoration: done ? "line-through" : "" }}>
        {name}
        {!done ? <button id="completed-item-btn" onClick={props.completed}>Done</button> : ""}
        {/* <button id="delete-item-btn" onClick={props.remove}><RiDeleteBin2Line height="30px" /></button> */}
      </li>
    );
  }
  