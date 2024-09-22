import { DishContainer } from '../dish/container.jsx';

export const Menu = ({ dishIds }) => {
	return (
		<ul>
			{dishIds.map(dishId => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<DishContainer dishId={dishId} />
				</li>
			))}
		</ul>
	);
};
