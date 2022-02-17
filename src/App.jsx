import React from 'react';

import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import InputField from './components/inputField/InputField';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputField />
        <TodoList />
      </div>
    </div>
  );
}
