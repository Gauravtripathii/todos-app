import React from "react";

function TodoForm({setInputText, setTodos, inputText, todos}) {
    const inputTextHandler = (e) => {
        setInputText(e);
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, inputText]);
        setInputText('');
    }

    return(
        <form>
            <input
            type="text"
            value={inputText}
            onChange={(e) => inputTextHandler(e.target.value)} />
            <input
            type="submit"
            value="add"
            onClick={addTodoHandler} />
        </form>
    );
}

export default TodoForm;
