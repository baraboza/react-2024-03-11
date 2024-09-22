import { Review } from './component.jsx';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors.js';

export const ReviewContainer = ({ reviewId, ...props }) => {
	const review = useSelector(state => selectReviewById(state, reviewId));

	if (!review) {
		return null;
	}

	return <Review {...props} review={review} />;
};
