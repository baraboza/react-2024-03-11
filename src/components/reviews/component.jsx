import {Review} from "../review/component.jsx";

export const Reviews = ({reviews}) => {
	return (
		<ul>
			{reviews.map((review) => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<Review review={review}/>
				</li>
			))}
		</ul>
	)
}
