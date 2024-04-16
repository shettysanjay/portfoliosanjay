import React from "react";
import { deleteItem, doneToDo } from "./todoSlice";
import { useDispatch } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Items = (item) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <div className="todo_list">
      <ul className="todo_unordered">
        <li key={item.id} className={item.isDone ? "todo_strike" : ""}>
          {item.name}
          <IconButton
            aria-label="check"
            onClick={() => dispatch(doneToDo(item.id))}
            disabled={item.isDone === true}
          >
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Items;
