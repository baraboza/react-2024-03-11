import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUserIds } from '../selectors.js';

export const getUsers = createAsyncThunk(
	'user/getUsers',
	async () => {
		const response = await fetch('http://localhost:3001/api/users');
		return response.json();
	},
	{
		condition: (_, { getState }) => !selectUserIds(getState())?.length,
	},
);
