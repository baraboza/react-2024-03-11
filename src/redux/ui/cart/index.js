import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {},
	reducers: {
		incrementDish: (state, { payload: id }) => {
			const dishCount = state[id] || 0;
			state[id] = dishCount + 1;
		},

		decrementDish: (state, { payload: id }) => {
			state[id] = (state[id] || 0) - 1;

			if (state[id] <= 0) {
				delete state[id];
			}
		},

		setDishAmount: (state, { payload: { id, amount } }) => {
			state[id] = amount;

			if (state[id] <= 0) {
				delete state[id];
			}
		},
	},
});

export const { incrementDish, decrementDish, setDishAmount } = cartSlice.actions;
