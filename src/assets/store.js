import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../projects/ToDoApp/todoSlice";
import { createSlice } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});

export default store;
