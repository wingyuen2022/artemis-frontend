import { createSlice, configureStore } from '@reduxjs/toolkit';

export const chatActions = chatSlice.actions;
export const tripActions = tripSlice.actions;
export const userActions = userSlice.actions;

const store = configureStore({
  reducer: { 
      chat: chatSlice.reducer, 
      trip: tripSlice.reducer,
      user: userSlice.reducer },
});

const initialChatState = [];

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        setChat(state, action) {
            state = action.payload;
        },
    },
});

const initialTripState = {
    tripName: "",
    members: [],
    duration: null,
    map: null,
    budget: [],
    checkList: []
};

const tripSlice = createSlice({
    name: 'trip',
    initialState: initialTripState,
    reducers: {
        setTrip(state, action) {
            state = action.payload;
        },
        setTripName(state, action) {
            state.tripName = action.payload;
        },
        setMembers(state, action) {
            state.members = action.payload;
        },
        setDuration(state, action) {
            state.duration = action.payload;
        },
        setMap(state, action) {
            state.map = action.payload;
        },
        setBudget(state, action) {
            state.budget = action.payload;
        },
        setCheckList(state, action) {
            state.checkList = action.payload;
        },
    },
});

const initialUserState = { 
    email: "",
    preferredName: "",
    password: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(state, action) {
            state = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPpreferredName(state, action) {
            state.preferredName = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
    },
});


export default store;