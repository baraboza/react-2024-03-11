import { Menu } from '../menu/component.jsx';
import { Reviews } from '../reviews/component.jsx';
import { useCounter } from '../../hooks/useCounter.js';
import { Button } from '../button/component.jsx';
import { SIZES } from '../../constants/sizes.js';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.jsx';
import { useSelector } from 'react-redux';

export const Restaurant = ({ className, restaurantId }) => {
	const { amount, decrement, increment } = useCounter();
	const user = useContext(UserContext);

	const restaurant = useSelector(state => state.restaurant.entities[restaurantId]);

	if (!restaurant) {
		return null;
	}

	const { name, menu, reviews } = restaurant;

	return (
		<div className={classNames(styles.root, className)}>
			<h2>{name}</h2>
			{user && (
				<div className={styles.count}>
					<Button
						className={styles.countDecrement}
						onClick={decrement}
						disabled={amount === 0}
						viewVariant="secondary"
						size={SIZES.s}
					>
						-
					</Button>
					<span>{amount}</span>
					<Button
						className={styles.countIncrement}
						onClick={increment}
						disabled={amount === 5}
						viewVariant="secondary"
						size={SIZES.s}
					>
						+
					</Button>
				</div>
			)}

			<div>
				<h3>Меню</h3>
				<Menu menu={menu} />
			</div>
			<div>
				<h3>Отзывы</h3>
				<Reviews reviews={reviews} />
			</div>
		</div>
	);
};
