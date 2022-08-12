export const setChat = (chat) => {
    return {
        type: "SET_CHAT",
        payload: chat
    }
};

export const setTrip = (trip) => {
    return {
        type: "SET_TRIP",
        payload: trip
    }
};

export const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
};

export const setOrigin = (origin) => {
    return {
        type: "SET_ORIGIN",
        payload: origin
    }
};

export const setDestination = (destination) => {
    return {
        type: "SET_DESTINATION",
        payload: destination
    }
};

export const setFormName = (name) => {
    return {
        type: "SET_FORM_NAME",
        payload: name
    }
};

export const setFormOrigin = (origin) => {
    return {
        type: "SET_FORM_ORIGIN",
        payload: origin
    }
};

export const setFormDestination = (destination) => {
    return {
        type: "SET_FORM_DESTINATION",
        payload: destination
    }
};

export const setFormStartDate = (startDate) => {
    return {
        type: "SET_FORM_START_DATE",
        payload: startDate
    }
};

export const setFormEndDate = (endDate) => {
    return {
        type: "SET_FORM_END_DATE",
        payload: endDate
    }
};
