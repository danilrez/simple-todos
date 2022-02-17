import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.css';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="container__itemslist">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
