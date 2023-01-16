import React from "react";
import "./Todo-List.scss";
import TodoDesc from "./ToDo-Desc/ToDo-Desc";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo, updateTodo } from "./../../redux/action/index";
import { useEffect, useState } from "react";

export const TodoItem = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [open, setOpen] = useState([]);

  // Handle expand collapse for showing description
  const toggleOpen = (id) => {
    if (open.includes(id)) {
      setOpen(open.filter((sid) => sid !== id));
    } else {
      let newOpen = [...open];
      newOpen.push(id);
      setOpen(newOpen);
    }
  };

  // Load the Todo from server
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  // delete todo item
  const removeDoneTodos = (id) => {
    dispatch(deleteTodo(id));
  };

  // Mark todo as complete
  const markAsCompleteTodo = (id) => {
    const todo = todos.filter((todo) => todo._id === id);
    todo.completed = !todo.completed;
    dispatch(updateTodo(id, todo));
  };

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <div key={todo._id}>
            <li
              className="todo span-left"
              onClick={(e) => {
                e.stopPropagation();
                toggleOpen(todo._id);
              }}
            >
              {/* Changing todo style on marking completed */}
              <div
                className={`${
                  todo.completed !== false
                    ? "todoCompletedWrapper"
                    : "todoWrapper"
                }`}
              >
                {todo.title}

                <input
                  type="checkbox"
                  className="checkmark"
                  checked={todo.completed}
                  disabled={todo.completed}
                  onClick={(e) => {
                    e.stopPropagation();
                    markAsCompleteTodo(todo._id);
                  }}
                />
                <button
                  className="showInfo"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeDoneTodos(todo._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
            {/* on expand clicked show description */}
            {open.includes(todo._id) ? (
              <TodoDesc key={todo._id} todo={todo} />
            ) : null}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TodoItem;
