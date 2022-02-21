import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../../store/todoSlice';
import { FcFullTrash } from 'react-icons/fc';
import './TodoItem.css';

import { animated, useSpring, config, useSpringRef, useChain } from 'react-spring';

export default function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();
  const checkboxAnimationRef = useSpringRef();
  const [checkmarkLength, setCheckmarkLength] = React.useState();

  const checkboxAnimationStyle = useSpring({
    background: completed ? '#09f' : '#f5f5ff',
    border: completed ? '0.15rem solid #08f' : ' 0.15rem solid #00000025',
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const checkmarkAnimationRef = useSpringRef();
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

  return (
    <li>
      <label className={`todo__items ${completed ? 'todo__items__active' : null}`}>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => dispatch(toggleTodoCompleted({ id }))}
        />
        <animated.svg
          style={checkboxAnimationStyle}
          className="checkbox"
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none">
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke="#f5f5ff"
            ref={(ref) => (ref ? setCheckmarkLength(ref.getTotalLength()) : null)}
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
          />
        </animated.svg>
        {text}
      </label>
      <FcFullTrash
        className="content__items__delete"
        onClick={() => dispatch(removeTodo({ id }))}
      />
    </li>
  );
}
