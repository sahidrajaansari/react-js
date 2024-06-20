import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 1,
      msg: "Learn React",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    editTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index].msg = action.payload.msg;
    },
    toggleTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todoList[index].isCompleted = !state.todoList[index].isCompleted;
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleTodo, setTodoList } =
  todoSlice.actions;
export default todoSlice.reducer;
