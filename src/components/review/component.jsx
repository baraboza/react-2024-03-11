import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors.js';

export const Review = ({ reviewId }) => {
	const review = useSelector(state => selectReviewById(state, reviewId));

	if (!review) {
		return null;
	}

	return <span>{review.text}</span>;
};
