import { all, fork } from "redux-saga/effects";
import watchMoviesSagas from "./moviesSagaS";

export default function* rootSaga() {
  yield all([fork(watchMoviesSagas)]);
}
