import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import allReducers from '../reducers';

export const store = configureStore({
	reducer: {
		user: userReducer,
		allReducers
	},
	devTools: process.env.NODE_ENV !== 'production',
});
