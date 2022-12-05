import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		users: {
			allusers: null,
			isFetching: false,
			error: false,
		},
		message: '',
	},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
