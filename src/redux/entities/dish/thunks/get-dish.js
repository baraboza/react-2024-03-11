import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStrapiApiUrl, getStrapiNormalizedData } from '../../../../utils/strapi.js';
import { selectDishIds } from '../selectors.js';

export const getDish = createAsyncThunk(
	'user/getUsers',
	async id => {
		const response = await fetch(getStrapiApiUrl(`/dishes/${id}?populate[ingredients]=true`));
		const json = await response.json();
		return getStrapiNormalizedData(json?.data);
	},
	{
		condition: (id, { getState }) => !selectDishIds(getState())?.includes(Number(id)),
	},
);
