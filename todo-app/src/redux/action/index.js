import { ADDNEW_TODO, DELETE_TODO, UPDATE_TODO } from "./type";
import { GET_TODO } from "./type";
const API_URL = "http://localhost:3003";

export const addNewTodo = (todoText) => async (dispatch) => {
  fetch(`${API_URL}/todoList`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: todoText.title,
      description: todoText.description,
      dueDate: todoText.dueDate,
      dueTime: todoText.dueTime,
      completed: todoText.completed,
    }),
  })
    .then((result) => result.json())
    .then((json) => dispatch({ type: ADDNEW_TODO, payload: json }));
};

export const getTodo = () => async (dispatch) => {
  console.log("insidde get");
  fetch(`${API_URL}/todoList`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((json) => dispatch({ type: GET_TODO, payload: json }));
};

export const updateTodo = (id, data) => async (dispatch) => {
  console.log("insidde upate");
  const todo = {
    completed: data.completed,
  };
  fetch(`${API_URL}/todoList/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((result) => result.json())
    .then((json) =>
      dispatch({ type: UPDATE_TODO, payload: [data.completed, id] })
    );
};

export const deleteTodo = (id) => async (dispatch) => {
  console.log("insidde delete");
  fetch(`${API_URL}/todoList/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((json) => dispatch({ type: DELETE_TODO, payload: id }));
};
