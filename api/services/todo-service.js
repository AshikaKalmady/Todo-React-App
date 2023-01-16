import Todo from "./../model/todo.js";

//Service methods
export const create = async (newTodo) => {
  const todo = new Todo(newTodo);
  return todo.save();
};

export const search = async (query) => {
  const params = { ...query };
  const todos = Todo.find(query);
  return todos;
};

export const get = async (id) => {
  console.log("inside get");
  return Todo.findById(id);
};

export const update = async (id, updatedTodo) => {
  const todo = Todo.findByIdAndUpdate({ _id: id }, updatedTodo, { new: true });
  return todo;
};

export const remove = (id) => {
  const todo = Todo.deleteOne({ _id: id });
  return todo;
};
