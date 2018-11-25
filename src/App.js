import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setToDos] = useState([
    { text: 'Learn about React' },
    { text: 'Meet friends for lunch'},
    { text: 'Build todo app'},
  ]);
  
  const Todo = ({ todo }) => <div className="todo">{ todo.text }</div>;
  const TodoList = todos.map((todo, i) => {
    return <Todo key={i} index={i} todo={todo} />
  });

  return (
    <div className="app">
      <div className="todo-list">
        { TodoList }   
      </div>
    </div>
  );
};


export default App;
