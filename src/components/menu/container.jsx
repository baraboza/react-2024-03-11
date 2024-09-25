import { Menu } from './component.jsx';
import { useSelector } from 'react-redux';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id.js';
import { selectRestaurantDishIds } from '../../redux/entities/restaurant/selectors.js';
import { useRequest } from '../../hooks/useRequest.js';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants.js';

export const MenuContainer = ({ restaurantId, ...props }) => {
	const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

	const dishIds = useSelector(state => selectRestaurantDishIds(state, restaurantId));

	if (requestStatus === REQUEST_STATUSES.pending) {
		return <div>Loading...</div>;
	}

	if (!dishIds?.length) {
		return null;
	}

	return <Menu {...props} dishIds={dishIds} />;
};
