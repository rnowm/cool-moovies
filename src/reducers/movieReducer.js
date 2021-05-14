import { fromJS, List } from "immutable";
import { ITEM } from "../actions/types";

const initialState = fromJS({
  data: new List([]),
  fetching: false,
  success: false,
  error: null,
});

export default function allMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM.GET_MOVIE_DETAILS:
    case ITEM.SUCCESS_MOVIE_DETAILS:
    case ITEM.FAILURE_MOVIE_DETAILS:
      return state.merge(action.payload);
    default:
      return state;
  }
}
