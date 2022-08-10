const tripReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_TRIP":
            state = action.payload;
            return state;
        default:
            return state;
    }
};
export default tripReducer;