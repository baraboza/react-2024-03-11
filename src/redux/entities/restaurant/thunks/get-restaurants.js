import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from '../selectors.js';
import { getStrapiApiUrl, getStrapiNormalizedData } from '../../../../utils/strapi.js';

const PARAMS = {
	populate: {
		img: true,
		menu: { fields: 'id' },
		reviews: { fields: 'id' },
	},
};

export const getRestaurants = createAsyncThunk(
	'restaurant/getRestaurants',
	async () => {
		const response = await fetch(getStrapiApiUrl('/restaurants', PARAMS));
		const json = await response.json();
		return getStrapiNormalizedData(json?.data, PARAMS);
	},
	{
		condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
	},
);
