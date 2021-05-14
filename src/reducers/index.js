import { combineReducers } from "redux-immutable";
import moviesReducer from "./moviesReducer";

const rootReducer = (asyncReducers) =>
  combineReducers({
    movies: moviesReducer,
    ...asyncReducers,
  });

export default rootReducer;
