import { Reviews } from './component.jsx';
import { useSelector } from 'react-redux';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurant-id.js';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors.js';
import { useRequest } from '../../hooks/useRequest.js';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants.js';
import { useParams } from 'react-router-dom';

export const ReviewsContainer = ({ ...props }) => {
	const { restaurantId } = useParams();
	const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);

	const reviewIds = useSelector(state => selectRestaurantReviewIds(state, restaurantId));

	if (requestStatus === REQUEST_STATUSES.pending) {
		return <div>Loading...</div>;
	}

	if (!reviewIds?.length) {
		return null;
	}

	return <Reviews {...props} reviewIds={reviewIds} />;
};
