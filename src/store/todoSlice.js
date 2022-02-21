import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      !!action.payload.text
        ? state.todos.push({
            id: uniqid(),
            text: action.payload.text,
            completed: false,
          })
        : console.log('empty line');
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo(state, action) {
      const editTodo = state.todos.find((todo) => todo.id === action.payload.id);
      editTodo.text = action.payload.editText;
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;
