import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
import counterReducer from "../features/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		book: bookReducer,
	},
	devTools: true,
});
