import { Counter } from '../counter/component.jsx';

import styles from './styles.module.scss';
import classNames from 'classnames';

export const Dish = ({ dish, className, withCart, amount, setAmount }) => {
	return (
		<div className={classNames(styles.root, className)}>
			<span>{dish.name}</span>
			{withCart && (
				<Counter className={styles.counter} value={amount} setValue={setAmount} max={5} />
			)}
		</div>
	);
};
