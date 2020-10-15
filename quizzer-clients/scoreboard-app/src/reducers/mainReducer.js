import * as Redux from "redux";

import { scoreboardReducer } from './scoreboardReducer'

export const mainReducer = Redux.combineReducers({
  scoreboard: scoreboardReducer,
});
