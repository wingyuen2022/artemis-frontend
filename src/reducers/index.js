import chatReducer from "./chat";
import tripReducer from "./trip";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    chatReducer,
    tripReducer,
    userReducer
});
export default allReducers;