import * as Redux from "redux";

import { roomReducer } from "./roomReducer";
import { categoryReducer } from "./categoryReducer";
import { roundReducer } from "./roundReducer";
import { roundPointsReducer } from "./roundPointsReducer";

export const mainReducer = Redux.combineReducers({
  room: roomReducer,
  categories: categoryReducer,
  round: roundReducer,
  points: roundPointsReducer,
});
