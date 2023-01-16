import { response } from "express";
import * as todoService from "./../services/todo-service.js";
// Controllers

const setResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

const setError = (err, response) => {
  response.status(500);
  response.json(err);
};

export const index = async (req, cons) => {
  try {
    const todo = req.body;
    const savedTodo = await todoService.search({});
    setResponse(savedTodo, cons);
  } catch (error) {
    console.log(error);
    setError(error, cons);
  }
};

export const create = async (req, cons) => {
  try {
    const todo = req.body;
    const savedTodo = await todoService.create(todo);
    setResponse(savedTodo, cons);
  } catch (error) {
    console.log(error);
    setError(error, cons);
  }
};

export const update = async (req, cons) => {
  try {
    const id = req.params.id;
    const updateTodo = req.body;
    let currDate = new Date();
    updateTodo.lastModifiedDate = currDate.toLocaleString();
    const updatedTodo = await todoService.update(id, updateTodo);
    setResponse(updatedTodo, cons);
  } catch (error) {
    console.log(error);
    setError(error, cons);
  }
};

export const get = async (req, cons) => {
  try {
    const id = req.params.id;
    const getData = await todoService.get(id);
    console.log(getData);
    setResponse(getData, cons);
  } catch (error) {
    console.log(error);
    setError(error, cons);
  }
};

export const remove = async (req, cons) => {
  try {
    const id = req.params.id;
    const getData = await todoService.remove(id);
    setResponse(getData, cons);
  } catch (error) {
    console.log(error);
    setError(error, cons);
  }
};
