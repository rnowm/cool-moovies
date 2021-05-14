import { combineReducers } from "redux-immutable";
import allMoviesReducer from "./allMoviesReducer";
import movieReducer from "./movieReducer";

const rootReducer = (asyncReducers) =>
  combineReducers({
    allMovies: allMoviesReducer,
    movie: movieReducer,
    ...asyncReducers,
  });

export default rootReducer;
