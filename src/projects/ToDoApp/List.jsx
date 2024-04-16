import React from "react";
import { useSelector } from "react-redux";
import Items from "./Items";

const List = () => {
  const stateItems = useSelector((state) => state.todo);

  const len = stateItems.itemOrder.length;

  return (
    <div>
      {len > 0 ? (
        stateItems.itemOrder.map((id) => {
          return <Items key={id} {...stateItems.items[id]} length={len} />;
        })
      ) : (
        <div className="todo_empty">No tasks found</div>
      )}
    </div>
  );
};

export default List;
