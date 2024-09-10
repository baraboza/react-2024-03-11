import { Dish } from '../dish/component.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.js';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors.js';

export const Menu = ({ restaurantId }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDishesByRestaurantId(restaurantId));
	}, [restaurantId]);

	const dishIds = useSelector(state => selectRestaurantDishIds(state, restaurantId));

	if (!dishIds?.length) {
		return null;
	}

	return (
		<ul>
			{dishIds.map(dishId => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<Dish dishId={dishId} />
				</li>
			))}
		</ul>
	);
};
