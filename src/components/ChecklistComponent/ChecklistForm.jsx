import "./Checklist.css";

export default function ChecklistForm(props) {
    return (
      <div className="new-item-container">
      <form id="form-item-input" onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
        
        <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Reminder: Trip checklist!"
      />
            <button className="add-new-item" type="submit">+</button> 
      </form>
      </div>
    );
  }