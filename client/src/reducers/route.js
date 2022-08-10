const routeReducer = (state = {
    origin: null,
    destination: null
}, action) => {
    switch(action.type) {
        case "SET_ORIGIN":
            state.origin = action.payload;
            return state;
        case "SET_DESTINATION":
            state.destination = action.payload;
            return state;
        default:
            return state;
    }
};
export default routeReducer;