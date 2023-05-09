import { combineReducers } from "redux";
import darkThemeReducer from "./darkThemeReducer";
import loaderReducer from "./loaderReducer";

const allReducers = combineReducers({ darkThemeReducer, loaderReducer });
export default allReducers;
