import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../../store/todoSlice';
import { FcFullTrash, FcCheckmark } from 'react-icons/fc';
import './TodoItem.css';

export default function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="content__items__todo">
        <FcCheckmark />
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodoCompleted({ id }))}
        />
        <span>{text}</span>
      </div>
      <FcFullTrash
        className="content__items__delete"
        onClick={() => dispatch(removeTodo({ id }))}
      />
    </li>
  );
}
