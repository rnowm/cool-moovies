import { createActionTypes } from "../utils";

export const ITEM = createActionTypes("ITEM", [
  // "GET",
  "GET_ALL_MOVIES",
  "SUCCESS_ALL_MOVIES",
  "FAILURE_ALL_MOVIES",
  "GET_MOVIE_DETAILS",
  "SUCCESS_MOVIE_DETAILS",
  "FAILURE_MOVIE_DETAILS",
  // "SAVE",
  // "PUT",
  // "PATCH",
  // "DELETE",
]);

export default ITEM;
