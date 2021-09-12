import counterReducer from "./counter.reducer";
import isLoggedReducer from "./isLogged.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default allReducers;
