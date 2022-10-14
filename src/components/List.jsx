import { useState, useContext } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TodoContext } from "../TodoContext";


function List(props) {

    const { list, setList } = useContext(TodoContext);
    let { id, todo, completed } = props;
    const [checked, setChecked] = useState(completed);

    function handleCheck(e) {
        const { value } = e.target;
        const item = list.find(li => li.id === id);

        if (document.getElementById([value]).checked) {
            item.completed = true;
        }
        else {
            item.completed = false;
        }

        setList(prev => [...prev]);
    }


    return <div className="flex-container sbet">

        <div className="flex-container">
            <input defaultChecked={checked} id={id} type="checkbox" name="id" value={id} onClick={handleCheck} onChange={() => { setChecked(!checked) }} />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }} className="todo-txt"> {todo} </span>
        </div>
        
        {props.deleteItem && <button className="delete-icon-btn" onClick={() => { props.deleteItem(id) }}><DeleteOutlineIcon /></button>}

    </div>

}

export default List;