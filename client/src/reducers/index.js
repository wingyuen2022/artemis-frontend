import chatReducer from "./chat";
import titleReducer from "./title";
import tripReducer from "./trip";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    chatReducer,
    titleReducer,
    tripReducer,

});
export default allReducers;
