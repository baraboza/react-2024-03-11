import { Counter } from '../counter/component.jsx';
import { useContext, useState } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user.jsx';
import { useSelector } from 'react-redux';

export const Dish = ({ dishId, className }) => {
	const [count, setCount] = useState(0);
	const user = useContext(UserContext);

	const dish = useSelector(state => state.dish.entities[dishId]);

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
