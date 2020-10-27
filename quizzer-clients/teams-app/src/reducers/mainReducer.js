import * as Redux from "redux";

import { roomReducer } from "./roomReducer";
import { roundReducer } from "./roundReducer";

export const mainReducer = Redux.combineReducers({
  room: roomReducer,
  round: roundReducer,
});
