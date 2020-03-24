import { combineReducers } from "redux";
import { movies } from "./movies";
import { sortData } from "./sort";

const rootReducer = combineReducers({ movies, sortData });

export default rootReducer;
