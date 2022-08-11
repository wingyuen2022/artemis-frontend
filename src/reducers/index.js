import chatReducer from "./chat";
import routeReducer from "./route";
import titleReducer from "./title";
import tripReducer from "./trip";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    chatReducer,
    routeReducer,
    titleReducer,
    tripReducer,

});
export default allReducers;
