import * as actionTypes from "./../action/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];
    case actionTypes.GET_TODO:
      return action.payload;
    case actionTypes.UPDATE_TODO:
      const todoList2 = state.map((todo) => {
        if (todo._id === action.payload[1]) {
          console.log(action.payload[0]);
          return { ...todo, completed: action.payload[0] };
        } else {
          console.log("updaed no inside");
          return todo;
        }
      });
      return todoList2;
    case actionTypes.DELETE_TODO:
      const todoList = state.filter((todo) => todo._id !== action.payload);
      return todoList;

    default:
      return state;
  }
};
