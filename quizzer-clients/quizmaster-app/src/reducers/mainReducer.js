import * as Redux from "redux";

import { roomReducer } from "./roomReducer"
import { categoryReducer } from "./categoryReducer"

export const mainReducer = Redux.combineReducers({
  room: roomReducer,
  categories: categoryReducer
});
