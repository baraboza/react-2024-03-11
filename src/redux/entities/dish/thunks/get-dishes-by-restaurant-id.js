import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantDishIds } from '../../restaurant/selectors.js';
import { selectDishIds } from '../selectors.js';

export const getDishesByRestaurantId = createAsyncThunk(
	'dish/getDishesByRestaurantId',
	async restaurantId => {
		const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
		return response.json();
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
