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
