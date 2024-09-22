import { Menu } from '../menu/component.jsx';
import { Reviews } from '../reviews/component.jsx';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors.js';

export const Restaurant = ({ className, restaurantId }) => {
	const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

	if (!restaurant) {
		return null;
	}

	const { name } = restaurant;

	return (
		<div className={classNames(styles.root, className)}>
			<h2>{name}</h2>
			<div>
				<h3>Меню</h3>
				<Menu restaurantId={restaurantId} />
			</div>
			<div>
				<h3>Отзывы</h3>
				<Reviews restaurantId={restaurantId} />
			</div>
		</div>
	);
};
