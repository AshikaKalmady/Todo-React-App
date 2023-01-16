import express from "express";
import * as todoController from "../controller/todo-controller.js";
const router = express.Router();

/**
 * Get all todos - GET /todoList
 * Create a todo - POST /todoList
 */
router.route("/todoList").get(todoController.index).post(todoController.create);

/**
 * Get todo by id - GET /todoList/${id}
 * Update todo by id - GET /todoList/${id}
 * Delete todo by id - DELETE /todoList/${id}
 */
router
  .route("/todoList/:id")
  .get(todoController.get)
  .put(todoController.update)
  .delete(todoController.remove);

export default router;
