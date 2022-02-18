import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { FcPlus } from 'react-icons/fc';
import './InputField.css';

export default function InputField() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div className="container__inputfield">
      <form onSubmit={handleSubmit} className="inputfield__form">
        <input
          className="inputfield__form__input"
          type="text"
          autoComplete="off"
          placeholder="add your todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <FcPlus className="form__icon" />
      </form>
    </div>
  );
}
