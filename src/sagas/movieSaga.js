import { put, call, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { ITEM } from "../actions/types";
import { item } from "../actions";
import { API_KEY } from "../utils";

function* handleGetMovieDetails(action) {
  try {
    const { id } = action.payload;
    debugger;
    const { data } = yield call(
      axios.get,
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    yield put(item.successMovieDetails({ data }));
  } catch (e) {
    yield put(item.failureMovieDetails({ error: { ...e } }));
  }
}

function* watchMovieSaga() {
  yield all([takeLatest(ITEM.GET_MOVIE_DETAILS, handleGetMovieDetails)]);
}

export default watchMovieSaga;
