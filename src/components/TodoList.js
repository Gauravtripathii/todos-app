import React from "react";

function TodoList({todos, setTodos}){
    return(
        <ul>
            { todos.map((item) => <li key={Math.random()*1000}>{item}</li> )}
        </ul>
    );
}

export default TodoList;
