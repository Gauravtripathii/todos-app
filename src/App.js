import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <p>React Todo</p>
      <TodoForm setInputText={setInputText} />
      {inputText}
      <TodoList />
    </div>
  );
}

export default App;
