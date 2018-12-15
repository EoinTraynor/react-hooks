import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  const CompleteButton = () => <button onClick={() => completeTodo(index)}>Complete</button>;
  const RemoveButton = () => <button onClick={() => removeTodo(index)}>X</button>;
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <CompleteButton />
        <RemoveButton />
      </div>
    </div>
  );
}

export default TodoItem;