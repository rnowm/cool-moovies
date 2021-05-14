import { put, call, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { ITEM } from "../actions/types";
import { item } from "../actions";
import { API_KEY } from "../utils";

function* handleGetAllMovies(action) {
  try {
    const { data } = yield call(
      axios.get,
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    yield put(item.successAllMovies({ data }));
  } catch (e) {
    yield put(item.failureAllMovies({ error: { ...e } }));
  }
}

function* watchAllMoviesSaga() {
  yield all([takeLatest(ITEM.GET_ALL_MOVIES, handleGetAllMovies)]);
}

export default watchAllMoviesSaga;
