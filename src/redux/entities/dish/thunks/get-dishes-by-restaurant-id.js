import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantDishIds } from '../../restaurant/selectors.js';
import { selectDishIds } from '../selectors.js';
import { getStrapiApiUrl, getStrapiNormalizedData } from '../../../../utils/strapi.js';

const PARAMS = {
	populate: {
		ingredients: true,
	},
};

export const getDishesByRestaurantId = createAsyncThunk(
	'dish/getDishesByRestaurantId',
	async restaurantId => {
		const params = {
			...PARAMS,
			filters: {
				restaurantId,
			},
		};

		const response = await fetch(getStrapiApiUrl('/dishes', params));
		const json = await response.json();
		return getStrapiNormalizedData(json?.data, PARAMS);
	},
	{
		condition: (restaurantId, { getState }) => {
			const state = getState();
			const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);
			const dishIds = selectDishIds(state);

			return restaurantDishIds.some(id => !dishIds.includes(id));
		},
	},
);
