import { DishContainer } from '../dish/container.jsx';

export const Menu = ({ dishIds }) => {
	return (
		<div>
			<h3>Меню</h3>

			<ul>
				{dishIds.map(dishId => (
					// eslint-disable-next-line react/jsx-key
					<li>
						<DishContainer dishId={dishId} />
					</li>
				))}
			</ul>
		</div>
	);
};
