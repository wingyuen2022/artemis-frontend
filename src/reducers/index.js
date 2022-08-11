import chatReducer from "./chat";
import formReducer from "./form";
import routeReducer from "./route";
import titleReducer from "./title";
import tripReducer from "./trip";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    chatReducer,
    formReducer,
    routeReducer,
    titleReducer,
    tripReducer,

});
export default allReducers;
