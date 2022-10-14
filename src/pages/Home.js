import React, { useContext } from "react";
import InputArea from "../components/InputArea";
import List from "../components/List";
import { TodoContext } from "../TodoContext";

function Home() {
    const { list, setList } = useContext(TodoContext);

    function handleClick(props) {

        if (props.todo === "")
            window.alert("TextField can't be empty");
        else
            setList(prevValue => { return [...prevValue, props] });
        // console.log(`${props.todo} added in #todo`);
    }


    return <div className="center">
        <InputArea
            addItem={handleClick}
        />

        {list.map((listItem) =>
            <List
                key={listItem.id}
                id={listItem.id}
                todo={listItem.todo}
                completed={listItem.completed}
            />
        )}
    </div>
}

export default Home;