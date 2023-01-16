import React from "react";
import "./../Todo-Add.scss";
import { useState } from "react";
import TodoInput from "../Todo-Add";

function ToDoAddButton(props) {
  const [wasOpened, setModalIsOpen] = useState(false);

  function collapseHandler() {
    setModalIsOpen((wasOpened) => !wasOpened);
  }

  return (
    <section className="add-todo">
      <div>
        <button className="button" onClick={collapseHandler}>
          Add To-do
        </button>
      </div>

      {wasOpened && <TodoInput onSubmitTodo={collapseHandler} />}
    </section>
  );
}

export default ToDoAddButton;
