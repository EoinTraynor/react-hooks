import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React' },
    { text: 'Meet friends for lunch'},
    { text: 'Build todo app'},
  ]);
  
  const TodoList = todos.map((todo, i) => {
    return <TodoItem key={i} index={i} todo={todo} />
  });
  const addTodo = (item) => {
    setTodos([
      ...todos,
      {text: item}
    ]);
  }
  return (
    <div className="app">
      <div className="todo-list">
        { TodoList }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
