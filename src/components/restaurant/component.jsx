import classNames from 'classnames';

import styles from './styles.module.scss';
import { MenuContainer } from '../menu/container.jsx';
import { ReviewsContainer } from '../reviews/container.jsx';

export const Restaurant = ({ className, restaurant }) => {
	return (
		<div className={classNames(styles.root, className)}>
			<h2>{restaurant.name}</h2>
			<div>
				<h3>Меню</h3>
				<MenuContainer restaurantId={restaurant.id} />
			</div>
			<div>
				<h3>Отзывы</h3>
				<ReviewsContainer restaurantId={restaurant.id} />
			</div>
		</div>
	);
};
