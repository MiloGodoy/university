import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Importa 'thunk' directamente

import serviceReducer from "./reducers/serviceReducer";
import courseReducer from "./reducers/courseReducer";

let store = createStore(
  combineReducers({
    serviceReducer: serviceReducer,
    courseReducer : courseReducer
  }),
  applyMiddleware(thunk)
);

export default store;
