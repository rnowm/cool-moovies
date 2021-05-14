import { createSelector } from "reselect";

const movieState = (state) => state.get("movie");

const movieSelector = createSelector(movieState, (state) => {
  const data = state.get("data");

  return data;
});

const fetchingSelector = createSelector(movieState, (state) =>
  state.get("fetching")
);

const errorSelector = createSelector(movieState, (state) => {
  const error = state.get("error");

  return error;
});
export { movieSelector, fetchingSelector, errorSelector };
