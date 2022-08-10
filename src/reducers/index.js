import chatReducer from "./chat";
import routeReducer from "./route";
import titleReducer from "./title";
import tripReducer from "./trip";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    chatReducer,
    routeReducer,
    titleReducer,
    tripReducer,
    userReducer
});
export default allReducers;