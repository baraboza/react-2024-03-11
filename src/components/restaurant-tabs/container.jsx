import { RestaurantTabs } from './component.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors.js';

export const RestaurantTabsContainer = ({ ...props }) => {
	const restaurantIds = useSelector(selectRestaurantIds);

	if (!restaurantIds?.length) {
		return null;
	}

	return <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
};
