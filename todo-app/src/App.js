import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import TodoAddButton from "./components/Todo-Add/Todo-AddButton/Todo-AddButton";
import TodoItem from "./components/Todo-List/Todo-List";
import "./listTodo.scss";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="todo-wrapper">
        <TodoAddButton></TodoAddButton>
        <TodoItem></TodoItem>
      </div>
    </div>
  );
}
export default App;
