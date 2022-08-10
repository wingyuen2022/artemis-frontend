const chatReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_CHAT":
            state = action.payload;
            return state;
        default:
            return state;
    }
};
export default chatReducer;