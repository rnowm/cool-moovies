import { createSelector } from "reselect";

const moviesState = (state) => state.get("movies");

const moviesSelector = createSelector(moviesState, (state) => {
  const data = state.get("data");

  return data;
});

const fetchingSelector = createSelector(moviesState, (state) =>
  state.get("fetching")
);

const errorSelector = createSelector(moviesState, (state) => {
  const error = state.get("error");

  return error;
});
export { moviesSelector, fetchingSelector, errorSelector };
