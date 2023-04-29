import { createSlice } from "@reduxjs/toolkit"; //next js redux toolkit
export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		increase: (state, action) => {
			state.value += action.payload;
		},
		decrease: (state) => {
			state.value -= 1;
			// state.value =state.value +  action.payload
		},
	},
});
// case under reducers becomes an action
export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
