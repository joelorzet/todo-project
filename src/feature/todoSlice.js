import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const initialState = {
	todos: [
		{
			id: uuid(),
			name: 'Task 1',
			description: 'Task 1 description',
			completed: false,
		},
		{
			id: uuid(),
			name: 'Task 2',
			description: 'Task 2 description',
			completed: false,
		},
		{
			id: uuid(),
			name: 'Task 3',
			description: 'Task 3 description',
			completed: false,
		},
	],
};

export const todoSlice = createSlice({
	name: 'Todo',
	initialState,
	reducers: {
		reset: () => initialState,
	},
});

export const { reset } = todoSlice.actions;

export default todoSlice.reducer;
