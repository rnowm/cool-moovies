import { createSelector } from "reselect";

const allMoviesState = (state) => state.get("allMovies");

const allMoviesSelector = createSelector(allMoviesState, (state) => {
  const data = state.get("data");

  return data;
});

const fetchingSelector = createSelector(allMoviesState, (state) =>
  state.get("fetching")
);

const errorSelector = createSelector(allMoviesState, (state) => {
  const error = state.get("error");

  return error;
});
export { allMoviesSelector, fetchingSelector, errorSelector };
