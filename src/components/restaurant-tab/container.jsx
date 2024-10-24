import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.js';
import { Tab } from '../tab/component.jsx';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
	const navigate = useNavigate();

	const navigateToRestaurantCallback = useCallback(() => {
		navigate(`/restaurants/${restaurantId}`);
	}, [navigate, restaurantId]);

	if (!restaurant) {
		return null;
	}

	return <Tab {...props} title={restaurant.name} onClick={navigateToRestaurantCallback} />;
};
