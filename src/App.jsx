import React from 'react';
import uniqid from 'uniqid';
import { FcTodoList, FcSettings, FcPortraitMode, FcNightPortrait } from 'react-icons/fc';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: uniqid(),
          text: text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const toggleTodoCompleted = (id) => {
    console.log('check');

    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="App">
      <div className="container">
        <div className="container__header">
          <div className="header__logo">
            <FcTodoList className="header__logo__icon" />
            <span className="header__title" style={{ cursor: 'default' }}>
              TODO-app
            </span>
          </div>
          <div className="header__menu">
            <FcPortraitMode className="header__menu__icon" />
            <FcNightPortrait className="header__menu__icon" />
            <FcSettings className="header__menu__icon" />
          </div>
        </div>

        <div className="container__content">
          <div className="content__additems">
            <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
          </div>
          <div className="content__items">
            <TodoList
              todos={todos}
              toggleTodoCompleted={toggleTodoCompleted}
              removeTodo={removeTodo}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
