const formReducer = (state = {
    name: null,
    origin: null,
    destination: null,
    startDate: null,
    endDate: null
}, action) => {
    switch(action.type) {
        case "SET_FORM_NAME":
            state.name = action.payload;
            return state;
        case "SET_FORM_ORIGIN":
            state.origin = action.payload;
            return state;
        case "SET_FORM_DESTINATION":
            state.destination = action.payload;
            return state;
        case "SET_FORM_START_DATE":
            state.startDate = action.payload;
            return state;
        case "SET_FORM_END_DATE":
            state.endDate = action.payload;
            return state;
        default:
            return state;
    }
};
export default formReducer;