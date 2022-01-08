import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <p>React Todo</p>
      <TodoForm setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
