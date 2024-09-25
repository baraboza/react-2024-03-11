import { Restaurants } from './component.jsx';
import { useRequest } from '../../hooks/useRequest.js';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants.js';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants.js';

export const RestaurantsContainer = ({ ...props }) => {
	const requestStatus = useRequest(getRestaurants);

	if (requestStatus === REQUEST_STATUSES.pending) {
		return <div>Loading...</div>;
	}

	return <Restaurants {...props} />;
};
