import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // U can call it as u wish 'cause we created this thing like  "export default todoSlice.reducer"

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
