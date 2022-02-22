import React from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo, toggleTodoCompleted } from '../../store/todoSlice';
import { FcFullTrash, FcEditImage } from 'react-icons/fc';
import './TodoItem.css';

import { animated, useSpring, config, useSpringRef, useChain } from 'react-spring';

export default function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  const [editText, setEditText] = React.useState(text);
  const [editing, setEditing] = React.useState(false);
  const checkboxAnimationRef = useSpringRef();
  const [checkmarkLength, setCheckmarkLength] = React.useState();
  const checkmarkAnimationRef = useSpringRef();

  // TODO: think about how to fix this bug with colors after switched themes
  const localTheme = window.localStorage.getItem('theme');
  const bgDefault = localTheme === 'light' ? '#f5f5f5' : '#2d333b';
  const borderDefault = localTheme === 'light' ? '#c5c5cf' : '#444c57';
  //

  const checkboxAnimationStyle = useSpring({
    background: completed ? '#09f' : bgDefault,
    border: completed ? '0.12rem solid #08f' : `0.12rem solid ${borderDefault}`,
    config: config.gentle,
    ref: checkboxAnimationRef,
  });
  const checkmarkAnimationStyle = useSpring({
    x: completed ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    completed
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  const handleEdit = (e) => {
    e.preventDefault();
    setEditText(e.target.value);
    dispatch(editTodo({ id, editText }));
  };

  const handleEditDone = (e) => {
    if (e.code === 'Enter') setEditing(!editing);
  };

  return (
    <li>
      <label className="todo__items">
        <input type="checkbox" onChange={() => dispatch(toggleTodoCompleted({ id }))} />
        <animated.svg
          style={checkboxAnimationStyle}
          className={`checkbox ${completed ? 'checkbox_done' : null}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none">
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke="var(--stroke)"
            ref={(ref) => (ref ? setCheckmarkLength(ref.getTotalLength()) : null)}
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
          />
        </animated.svg>
        {!editing ? (
          <span
            className={`items__input ${completed ? 'items__input__done' : null}`}
            onDoubleClick={() => setEditing(!editing)}>
            {editText}
          </span>
        ) : (
          <input
            className="items__input__editing"
            type="text"
            autoComplete="off"
            value={editText}
            onChange={handleEdit}
            onKeyDown={handleEditDone}
          />
        )}
      </label>
      <FcEditImage className="todo__items__edit" onClick={() => setEditing(!editing)} />
      <FcFullTrash
        className="todo__items__delete"
        onClick={() => dispatch(removeTodo({ id }))}
      />
    </li>
  );
}
