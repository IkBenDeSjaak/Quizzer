import * as Redux from "redux";

import { scoreboardReducer } from './scoreboardReducer'
import { roomReducer } from './roomReducer'

export const mainReducer = Redux.combineReducers({
  scoreboard: scoreboardReducer,
  room: roomReducer
});
