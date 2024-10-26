import { Counter } from '../counter/component.jsx';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Dish = ({ dish, className, withCart, amount, setAmount }) => {
	return (
		<div className={classNames(styles.root, className)}>
			<Link to={`/dish/${dish.id}`} className={styles.link}>
				{dish.name}
			</Link>
			{withCart && (
				<Counter className={styles.counter} value={amount} setValue={setAmount} max={5} />
			)}
		</div>
	);
};
