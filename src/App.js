import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <section className="top">
        <p>React Todo</p>
        <TodoForm setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} />
      </section>
      
      <TodoList todos={todos} setTodos={setTodos} className="bottom" />
    </div>
  );
}

export default App;
