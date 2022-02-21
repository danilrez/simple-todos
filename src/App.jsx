import React from 'react';

import { ThemeProvider } from 'styled-components';

import {
  GlobalStyle,
  useDarkMode,
  LightMode,
  DarkMode,
  ThemeContext,
} from './globalStyle/GlobalStyle';

import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import InputField from './components/inputField/InputField';
import './App.css';

export default function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? LightMode : DarkMode;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div className="App">
          <div className="container">
            <Header />
            <InputField />
            <TodoList />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
