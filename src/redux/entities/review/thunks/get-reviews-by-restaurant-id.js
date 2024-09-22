import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewIds } from '../../restaurant/selectors.js';
import { selectReviewIds } from '../selectors.js';
import { getStrapiApiUrl, getStrapiNormalizedData } from '../../../../utils/strapi.js';

export const getReviewsByRestaurantId = createAsyncThunk(
	'review/getReviewsByRestaurantId',
	async restaurantId => {
		const params = {
			filters: {
				restaurantId,
			},
		};

		const response = await fetch(getStrapiApiUrl('/reviews', params));
		const json = await response.json();
		return getStrapiNormalizedData(json?.data);
	},
	{
		condition: (restaurantId, { getState }) => {
			const state = getState();
			const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);
			const reviewIds = selectReviewIds(state);

			return restaurantReviewIds.some(id => !reviewIds.includes(id));
		},
	},
);
