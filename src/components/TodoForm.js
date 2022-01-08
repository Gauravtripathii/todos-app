import React, { useState } from "react";

function TodoForm({setInputText}) {
    const inputTextHandler = (e) => {
        setInputText(e);
    }
    return(
        <form>
            <input
            type="text"
            onChange={(e) => inputTextHandler(e.target.value)} />
            <input
            type="submit"
            value="add" />
        </form>
    );
}

export default TodoForm;
