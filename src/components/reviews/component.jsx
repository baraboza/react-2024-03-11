import { ReviewContainer } from '../review/container.jsx';

export const Reviews = ({ reviewIds }) => {
	return (
		<ul>
			{reviewIds.map(reviewId => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<ReviewContainer reviewId={reviewId} />
				</li>
			))}
		</ul>
	);
};
