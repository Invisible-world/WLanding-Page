import { createSlice, current } from "@reduxjs/toolkit";
export const bookSlice = createSlice({
	name: "book",
	initialState: {
		value: [{ id: 1, title: "Book Title 1" }],
	},
	reducers: {
		create: (state, action) => {
			state.value = [...state.value, action.payload];
		},
		remove: (state, action) => {
			state.value = state.value.filter((el) => el.id !== action.payload);
			console.log(current(state));
		},
	},
});
// case under reducers becomes an action
export const { create, remove } = bookSlice.actions;
export default bookSlice.reducer;
