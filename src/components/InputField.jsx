import React from 'react';
import '../App.css';

export default function InputField({ text, handleInput, handleSubmit }) {
  return (
    <label style={{ display: 'flex' }}>
      <input
        type="text"
        placeholder="add todos"
        className="content__additems__input"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
}
