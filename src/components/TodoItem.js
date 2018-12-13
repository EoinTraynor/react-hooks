import React from 'react';

function TodoItem({ todo, index, completeTodo }) {
  const CompleteButton = () => <button onClick={() => completeTodo(index)}>Complete</button>;
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <CompleteButton />
      </div>
    </div>
  );
}

export default TodoItem;