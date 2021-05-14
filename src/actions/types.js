import { createActionTypes } from "../utils";

export const ITEM = createActionTypes("ITEM", [
  "GET",
  "GET_ALL",
  "SAVE",
  "PUT",
  "PATCH",
  "DELETE",
  "SUCCESS",
  "FAILURE",
]);

export default ITEM;
