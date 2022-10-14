import { useContext } from "react";
import List from "../components/List";
import { TodoContext } from "../TodoContext";


function Completed() {
    const { list, setList } = useContext(TodoContext);

    function deleteItem(uid) {
        setList(list.filter(list => list.id !== uid));
    }

    return <div className="center">

        {list.filter(li => li.completed===true).map(listItem =>
            <List
                key={listItem.id}
                id={listItem.id}
                deleteItem={deleteItem}
                todo={listItem.todo}
                completed={listItem.completed}
            /> 
        )}

        <button className="delete-btn" type="submit" onSubmit={e => e.preventDefault()} onClick={()=>setList([])}>Delete all</button>

    </div>
}
export default Completed;