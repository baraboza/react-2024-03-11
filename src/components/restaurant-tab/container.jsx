import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.js';
import { Tab } from '../tab/component.jsx';

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

	if (!restaurant) {
		return null;
	}

	return <Tab {...props} title={restaurant.name} />;
};
