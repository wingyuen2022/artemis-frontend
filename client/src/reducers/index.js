import chatReducer from "./chat";
import titleReducer from "./title";
import tripReducer from "./trip";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    chatReducer,
    titleReducer,
    tripReducer,
    userReducer
});
export default allReducers;