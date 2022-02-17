import React from 'react';
import '../App.css';
import { FcFullTrash } from 'react-icons/fc';

export default function TodoItem({
  id,
  text,
  completed,
  toggleTodoCompleted,
  removeTodo,
}) {
  return (
    <li>
      <div className="content__items__todo">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodoCompleted(id)}
        />
        <span>{text}</span>
      </div>
      <FcFullTrash className="content__items__delete" onClick={() => removeTodo(id)} />
    </li>
  );
}
