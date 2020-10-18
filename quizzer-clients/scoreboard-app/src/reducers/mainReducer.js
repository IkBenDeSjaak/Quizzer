import * as Redux from "redux";

import { roomReducer } from './roomReducer'

export const mainReducer = Redux.combineReducers({
  room: roomReducer
});
