// auth_reducers
// error_reducers
// meeting place for all

import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
  item: itemReducer
});
