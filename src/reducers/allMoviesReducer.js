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
    case ITEM.GET_ALL_MOVIES:
    case ITEM.SUCCESS_ALL_MOVIES:
    case ITEM.FAILURE_ALL_MOVIES:
      return state.merge(action.payload);
    default:
      return state;
  }
}
