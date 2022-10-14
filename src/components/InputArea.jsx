import React, { useState } from "react";

function InputArea(props) {

    const [newItem, setNewItem] = useState({ completed: false, id: "", todo: "" })

    function handleChange(event) {
        setNewItem(p => { return { ...p, completed: false, id: new Date().getTime(), todo: event.target.value } });
    }

    return <div className="flex-container sbet">
        <input type="text" value={newItem.todo} onChange={handleChange} placeholder="add todo item" ></input>
        <button className="add-btn" onClick={() => {
            props.addItem(newItem);
            setNewItem({ completed: false, id: "", todo: "" });
        }}><span>Add</span></button>

    </div>
}

export default InputArea;