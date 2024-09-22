import { Button } from '../button/component.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.js';

export const RestaurantTab = ({ restaurantId, isActive, onClick, className }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

	if (!restaurant) {
		return null;
	}

	return (
		<Button
			className={className}
			onClick={onClick}
			viewVariant={isActive ? 'primary' : 'secondary'}
		>
			{restaurant.name}
		</Button>
	);
};
