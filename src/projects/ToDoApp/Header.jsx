import React, { useState } from "react";
import { addItem, clearAll } from "./todoSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(input));
    setInput("");
  };
  return (
    <div className="todo_section">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo_input"
      />
      <button className="todo_btn" onClick={handleAddItem}>
        Add Task
      </button>
      <button className="todo_btn" onClick={() => dispatch(clearAll())}>
        Clear All
      </button>
    </div>
  );
};

export default Header;
