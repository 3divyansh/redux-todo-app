import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo !== action.payload);
    }
  }
});


export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
