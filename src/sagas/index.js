import { all, fork } from "redux-saga/effects";
import watchAllMoviesSaga from "./allMoviesSaga";
import watchMovieSaga from "./movieSaga";

export default function* rootSaga() {
  yield all([fork(watchAllMoviesSaga), fork(watchMovieSaga)]);
}
