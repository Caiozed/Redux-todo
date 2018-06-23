import { combineReducers } from "redux";
import UserReducers from "./userReducers.js";

const reducers = combineReducers({
  Users: UserReducers.handleUser
});

export default reducers;
