import React from "react";
import Header from "./Header";
import List from "./List";

import "./todo.css";

function TodoMain() {
  return (
    <div className="todo_view">
      <h1 className="todo_heading">To Do List</h1>
      <Header />
      <List />
    </div>
  );
}

export default TodoMain;
