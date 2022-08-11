const tripReducer = (state = null, action) => {
    switch(action.type) {
        case "SET_TRIP":
            state = action.payload;
            return state;
        default:
            return state;
    }
};
export default tripReducer;