import { Review } from '../review/component.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurant-id.js';
import { selectRestaurantReviewIds } from '../../redux/entities/restaurant/selectors.js';

export const Reviews = ({ restaurantId }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReviewsByRestaurantId(restaurantId));
	}, [restaurantId]);

	const reviewIds = useSelector(state => selectRestaurantReviewIds(state, restaurantId));

	if (!reviewIds?.length) {
		return;
	}

	return (
		<ul>
			{reviewIds.map(reviewId => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<Review reviewId={reviewId} />
				</li>
			))}
		</ul>
	);
};
