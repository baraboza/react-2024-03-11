import { RestaurantTabs } from './component.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors.js';
import { useParams } from 'react-router-dom';

export const RestaurantTabsContainer = ({ ...props }) => {
	const restaurantIds = useSelector(selectRestaurantIds);
	const { restaurantId } = useParams();

	if (!restaurantIds?.length) {
		return null;
	}

	return <RestaurantTabs {...props} restaurantIds={restaurantIds} currentId={restaurantId} />;
};
