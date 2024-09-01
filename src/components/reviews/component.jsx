import { Review } from '../review/component.jsx';

export const Reviews = ({ reviews }) => {
	return (
		<ul>
			{reviews.map(reviewId => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<Review reviewId={reviewId} />
				</li>
			))}
		</ul>
	);
};
