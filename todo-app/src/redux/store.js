// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { todosReducers } from "./reducer/Todo-Reducer";

// const reducer = combineReducers({
//   todo: todosReducers,
// });
// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { todosReducers } from "./reducer/Todo-Reducer";

export const store = configureStore({
  reducer: {
    todo: todosReducers,
  },
});

export default store;
