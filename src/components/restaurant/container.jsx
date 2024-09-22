import { Restaurant } from './component.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.js';

export const RestaurantContainer = ({ restaurantId, ...props }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

	if (!restaurant) {
		return null;
	}

	return <Restaurant {...props} restaurant={restaurant} />;
};
