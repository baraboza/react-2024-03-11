import { Counter } from '../counter/component.jsx';
import { useCallback, useContext } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors.js';
import { selectCartDishAmount } from '../../redux/ui/cart/selectors.js';
import { decrementDish, incrementDish } from '../../redux/ui/cart/index.js';

export const Dish = ({ dishId, className }) => {
	const dispatch = useDispatch();
	const user = useContext(UserContext);

	const dish = useSelector(state => selectDishById(state, dishId));
	const amount = useSelector(state => selectCartDishAmount(state, dishId));

	const increment = useCallback(() => dispatch(incrementDish(dishId)), [dispatch, dishId]);
	const decrement = useCallback(() => dispatch(decrementDish(dishId)), [dispatch, dishId]);

	if (!dish) {
		return null;
	}

	return (
		<div className={classNames(styles.root, className)}>
			<span>{dish.name}</span>
			{user && (
				<Counter
					className={styles.counter}
					value={amount}
					incrementValue={increment}
					decrementValue={decrement}
					max={5}
				/>
			)}
		</div>
	);
};
