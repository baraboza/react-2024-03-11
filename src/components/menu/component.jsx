import { Dish } from '../dish/component.jsx';

export const Menu = ({ menu }) => {
	return (
		<ul>
			{menu.map(dishId => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<Dish dishId={dishId} />
				</li>
			))}
		</ul>
	);
};
