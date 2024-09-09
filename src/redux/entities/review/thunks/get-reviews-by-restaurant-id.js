import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewIds } from '../../restaurant/selectors.js';
import { selectReviewIds } from '../selectors.js';

export const getReviewsByRestaurantId = createAsyncThunk(
	'review/getReviewsByRestaurantId',
	async restaurantId => {
		const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
		return response.json();
	},
	{
		condition: (restaurantId, { getState }) => {
			const state = getState();
			const restaurantReviewIds = selectRestaurantReviewIds(restaurantId);
			const reviewIds = selectReviewIds(state);

			return restaurantReviewIds.some(id => !reviewIds.includes(id));
		},
	},
);
