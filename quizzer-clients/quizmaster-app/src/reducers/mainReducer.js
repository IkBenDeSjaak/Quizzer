import * as Redux from "redux";

import { buttonsReducer } from './buttonsReducer'

export const mainReducer = Redux.combineReducers({
  buttons: buttonsReducer,
});
