import { createAction } from "../utils";
import { ITEM } from "./types";

export const item = {
  requestAllMovies: () =>
    createAction(ITEM.GET_ALL_MOVIES, {
      fetching: true,
      success: false,
      error: null,
    }),
  successAllMovies: (data) =>
    createAction(ITEM.SUCCESS_ALL_MOVIES, {
      ...data,
      fetching: false,
      success: true,
      error: null,
    }),
  failureAllMovies: (error) =>
    createAction(ITEM.FAILURE_ALL_MOVIES, {
      ...error,
      fetching: false,
      success: false,
    }),
  requestMovieDetails: (id) =>
    createAction(ITEM.GET_MOVIE_DETAILS, {
      id,
      fetching: true,
      success: false,
      error: null,
    }),

  successMovieDetails: (data) =>
    createAction(ITEM.SUCCESS_MOVIE_DETAILS, {
      ...data,
      fetching: false,
      success: true,
      error: null,
    }),
  failureMovieDetails: (error) =>
    createAction(ITEM.FAILURE_MOVIE_DETAILS, {
      ...error,
      fetching: false,
      success: false,
    }),
};
