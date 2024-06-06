import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) =>{

        state.todos.push({ id: Date.now(), todo: action.payload, completed: false });
    },
    editTodo: (state, action) => {
        const { id, todo } = action.payload;
        const existingTodo = state.todos.find(t => t.id === id);
        if (existingTodo) {
          existingTodo.todo = todo;
        }
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
    
  },
});

export const {addTodo, editTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;
