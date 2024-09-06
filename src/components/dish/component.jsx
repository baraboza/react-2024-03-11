import { Counter } from '../counter/component.jsx';
import { useContext, useState } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user.jsx';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors.js';

export const Dish = ({ dishId, className }) => {
	const [count, setCount] = useState(0);
	const user = useContext(UserContext);

	const dish = useSelector(state => selectDishById(state, dishId));

	if (!dish) {
		return null;
	}

	return (
		<div className={classNames(styles.root, className)}>
			<span>{dish.name}</span>
			{user && <Counter className={styles.counter} value={count} setValue={setCount} max={5} />}
		</div>
	);
};
