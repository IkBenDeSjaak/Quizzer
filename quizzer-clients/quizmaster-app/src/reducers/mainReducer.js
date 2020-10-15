import * as Redux from "redux";

import { buttonsReducer } from './buttonsReducer'
import { roomReducer } from "./roomReducer"

export const mainReducer = Redux.combineReducers({
  buttons: buttonsReducer,
  room: roomReducer
});
