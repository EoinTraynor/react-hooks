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

  const addTodo = (item) => {
    setTodos([
      ...todos,
      {text: item}
    ]);
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
