import React from "react";
import "./../Todo-List.scss";

// To Description component
const TodoDesc = ({ todo }) => {
  return (
    <div className="todo-desc">
      <div>
        Description: {todo.description}
        <br />
        Due: {todo.dueDate} at {todo.dueTime}
        <br />
      </div>
    </div>
  );
};

export default TodoDesc;
