import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const ThemeContext = React.createContext(null);

export const useDarkMode = () => {
  const [theme, setTheme] = React.useState('dark');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('dark');
  }, []);

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  return [theme, toggleTheme];
};

export const GlobalStyle = createGlobalStyle`
  :root{
  --stroke: #f5f5ff;
	--bg-header: ${({ theme }) => theme.bgHeader};
  --bg-header-input:${({ theme }) => theme.bgHeaderInput};
  --header-text: ${({ theme }) => theme.headerText};
  --header-text-hover: ${({ theme }) => theme.headerTextHover};
  --active-shadow: ${({ theme }) => theme.activeShadow};
  --bg-input: ${({ theme }) => theme.bgInput};
  --bg-content: ${({ theme }) => theme.bgContent};
  --content-hover: ${({ theme }) => theme.contentHover};
  --input-editing:${({ theme }) => theme.inputEditing};
  --color-text: ${({ theme }) => theme.colorText};
  --color-border: ${({ theme }) => theme.border};
  --color-scroll: ${({ theme }) => theme.scroll};
  --color-scroll-hover: ${({ theme }) => theme.scrollHover};
  --checkbox: ${({ theme }) => theme.checkbox};
  --checkbox-border: ${({ theme }) => theme.checkboxBorder};
  };
`;

export const DarkMode = {
  bgHeader: '#2d333b',
  bgHeaderInput: '#2d333b',
  bgContent: '#22272e',
  contentHover: '#282e36',
  colorText: '#acb9c6',
  headerText: '#adb9c5',
  headerTextHover: '#6d7985',
  activeShadow: '#12171e',
  inputEditing: '#2d333b',
  checkbox: '#2d333b',
  checkboxBorder: '#444c57',
  scroll: '#444c57',
  scrollHover: '#6d7985',
  border: '#444c57',
  bgInput: '#22272e',
};

export const LightMode = {
  bgHeader: '#b5b5bf',
  bgHeaderInput: '#b5b5bf',
  bgContent: '#f5f5ff',
  contentHover: '#f5f5ff',
  colorText: '#35353f',
  headerText: '#f5f5ff',
  headerTextHover: '#95959f',
  activeShadow: '#95959f',
  inputEditing: '#2d333b',
  checkbox: '#b5b5bf',
  checkboxBorder: '#c5c5cf',
  scroll: '#d5d5df',
  scrollHover: '#c5c5cf',
  border: '#c5c5cf',
  bgInput: '#f5f5ff',
};
