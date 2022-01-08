import React from "react";

function TodoList({todos}){
    const removeTodoHandler = (e) => {
        console.log(e)
    }
    return(
        <ul>
            { todos.map((item) => <li key={Math.random()*1000}>{item} <span onClick={removeTodoHandler}>X</span> </li> )}
        </ul>
    );
}

export default TodoList;
