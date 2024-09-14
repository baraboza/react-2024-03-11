import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUserIds } from '../selectors.js';
import { getStrapiApiUrl, getStrapiNormalizedData } from '../../../../utils/strapi.js';

export const getUsers = createAsyncThunk(
	'user/getUsers',
	async () => {
		const response = await fetch(getStrapiApiUrl('/users'));
		const json = await response.json();
		return getStrapiNormalizedData(json?.data);
	},
	{
		condition: (_, { getState }) => !selectUserIds(getState())?.length,
	},
);
