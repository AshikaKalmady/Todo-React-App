import React from "react";
import "./Todo-Add.scss";

import { useDispatch } from "react-redux";
import { addNewTodo } from "./../../redux/action/index";
import { useEffect, useState } from "react";

function TodoInput(props) {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState({});

  // Initialise the new empty todo object
  useEffect(() => {
    setTodoItem({ ...todoItem });
  }, []);

  // Update the title
  const handleTitleChange = (e) => {
    setTodoItem({
      ...todoItem,
      title: e.target.value,
    });
  };

  // Update the description
  const handleDescChange = (e) => {
    setTodoItem({
      ...todoItem,
      description: e.target.value,
    });
  };

  // Update the date changes in dd/mm/yyyy format
  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    var day = date.getDate();
    //var month = date.getMonth() + 1;
    var month = date.toLocaleString("default", { month: "long" });
    var year = date.getFullYear();
    setTodoItem({
      ...todoItem,
      dueDate: [day, month, year].join("/"),
    });
  };

  // Update the time changes in hh:mm zz format
  const handleTimeChange = (e) => {
    const time = e.target.value;
    var hms = time.split(":");
    var h = hms[0];
    hms[0] = h % 12 || 12;
    var timeSelected = `${hms[0]}:${hms[1]} ${h < 12 ? "am" : "pm"}`;
    console.log(hms);
    console.log(timeSelected);
    setTodoItem({
      ...todoItem,
      dueTime: timeSelected,
    });
  };

  // Toggle show hide add new todo
  function toggleStatus() {
    props.onSubmitTodo();
  }

  // Call api to add new todo
  function addTodoToList() {
    dispatch(addNewTodo(todoItem));
  }

  return (
    //adding details such as title, description, due date, and time.

    <div className="add-todo-list">
      <ul>
        <form>
          <fieldset>
            {" "}
            <label className="title-form">Title</label>
            <input
              placeholder="Add Task Title"
              id="newTitleNode"
              onChange={handleTitleChange}
              required
            />{" "}
          </fieldset>
          <br />
          <fieldset>
            {" "}
            <label className="title-form">Description</label>
            <input
              placeholder="Enter Description"
              id="newDescNode"
              onChange={handleDescChange}
              required
            />{" "}
          </fieldset>
          <br />
          <fieldset>
            {" "}
            <label className="title-form">Due Date</label>
            <input
              type="date"
              name="date"
              id="newDuedateNode"
              placeholder="Enter the date"
              onChange={handleDateChange}
              required
            />{" "}
          </fieldset>
          <br />
          <fieldset>
            {" "}
            <label className="title-form">Time</label>
            <input
              type="time"
              id="newTimeNode"
              placeholder="Enter Time"
              onChange={handleTimeChange}
              required
            />
          </fieldset>
          <br />
          <fieldset>
            <button
              className="button"
              onClick={() => {
                addTodoToList();
              }}
            >
              Submit
            </button>
            <button
              className="button"
              onClick={() => {
                toggleStatus();
              }}
            >
              Close
            </button>
          </fieldset>
        </form>
      </ul>
    </div>
  );
}

export default TodoInput;
