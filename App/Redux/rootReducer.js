import { combineReducers } from "redux";
import filterReducer from "./Filters/Reducer";
import todoReducer from "./Todos/Reducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer,
});

export default rootReducer;
