import { Button } from '../button/component.jsx';
import { useSelector } from 'react-redux';

export const RestaurantTab = ({ restaurantId, isActive, onClick, className }) => {
	const restaurant = useSelector(state => state.restaurant.entities[restaurantId]);

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
