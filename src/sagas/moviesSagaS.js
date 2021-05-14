// In case you need to use a selector
// import also select from redux-saga/effects
// and then simplie yield select(yourSelector())

import { put, call, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

import { ITEM } from "../actions/types";

import { item } from "../actions";

const API_KEY = "f5e1997e1aee777bf58aab88b75ffadb";
// `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}

// function* handleGet() {
//   try {
//     const { data } = yield call(
//       axios.get,
//       "https://jsonplaceholder.typicode.com/posts/"
//     );
//     yield put(item.success({ data }));
//   } catch (e) {
//     yield put(item.failure({ error: { ...e } }));
//   }
// }

function* handleGetAll(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(
      axios.get,
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`

      // `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    yield put(item.success({ data }));
  } catch (e) {
    yield put(item.failure({ error: { ...e } }));
  }
}

// function* handlePost(action) {
//   try {
//     const { saveData } = action.payload;
//     const { data } = yield call(
//       axios.post,
//       "https://jsonplaceholder.typicode.com/posts/",
//       { saveData }
//     );
//     yield put(item.success({ data }));
//   } catch (e) {
//     yield put(item.failure({ error: { ...e } }));
//   }
// }

// function* handlePut(action) {
//   try {
//     const { id, updateData } = action.payload;
//     const { data } = yield call(
//       axios.put,
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       { updateData }
//     );
//     yield put(item.success({ data }));
//   } catch (e) {
//     yield put(item.failure({ error: { ...e } }));
//   }
// }

// function* handlePatch(action) {
//   try {
//     const { id, updateData } = action.payload;
//     const { data } = yield call(
//       axios.patch,
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//       { updateData }
//     );
//     yield put(item.success({ data }));
//   } catch (e) {
//     yield put(item.failure({ error: { ...e } }));
//   }
// }

// function* handleDelete(action) {
//   try {
//     const { id } = action.payload;
//     const { data } = yield call(
//       axios.delete,
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     yield put(item.success({ data }));
//   } catch (e) {
//     yield put(item.failure({ error: { ...e } }));
//   }
// }

function* watchMoviesSagas() {
  yield all([
    // takeLatest(ITEM.GET, handleGet),
    takeLatest(ITEM.GET_ALL, handleGetAll),
    // takeLatest(ITEM.SAVE, handlePost),
    // takeLatest(ITEM.PUT, handlePut),
    // takeLatest(ITEM.PATCH, handlePatch),
    // takeLatest(ITEM.DELETE, handleDelete),
  ]);
}

export default watchMoviesSagas;
