import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <p>React Todo</p>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
