import { ReviewContainer } from '../review/container.jsx';

export const Reviews = ({ reviewIds }) => {
	return (
		<div>
			<h3>Отзывы</h3>

			<ul>
				{reviewIds.map(reviewId => (
					// eslint-disable-next-line react/jsx-key
					<li>
						<ReviewContainer reviewId={reviewId} />
					</li>
				))}
			</ul>
		</div>
	);
};
