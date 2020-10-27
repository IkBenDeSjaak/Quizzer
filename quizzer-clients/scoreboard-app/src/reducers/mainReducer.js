import * as Redux from "redux";

import { roomReducer } from "./roomReducer";
import { roundReducer } from "./roundReducer";
import { pointsReducer } from "./pointsReducer";

export const mainReducer = Redux.combineReducers({
  room: roomReducer,
  round: roundReducer,
  points: pointsReducer,
});
