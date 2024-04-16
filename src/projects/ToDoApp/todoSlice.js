import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: {
    1: { id: 1, name: "Eating", isDone: false },
    2: { id: 2, name: "Sleeping", isDone: false },
    3: { id: 3, name: "Walking", isDone: false },
  },
  itemOrder: [1, 2, 3],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const uniqueId = uuidv4();
      state.itemOrder.push(uniqueId);
      state.items[uniqueId] = {
        id: uniqueId,
        name: action.payload,
        isDone: false,
      };
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      state.itemOrder = state.itemOrder.filter((item) => {
        return item !== id;
      });
    },
    clearAll: (state) => {
      state.items = {};
      state.itemOrder = [];
    },
    doneToDo: (state, action) => {
      const id = action.payload;
      state.items[id].isDone = true;
    },
  },
});

export default todoSlice.reducer;
export const { addItem, deleteItem, clearAll, doneToDo } = todoSlice.actions;
