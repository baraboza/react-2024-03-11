import { Button } from '../button/component.jsx';
import { SIZES } from '../../constants/sizes.js';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Counter = ({
	value,
	setValue,
	incrementValue,
	decrementValue,
	min = 0,
	max,
	className,
}) => {
	return (
		<span className={classNames(styles.root, className)}>
			<Button
				className={styles.decrement}
				onClick={() => (decrementValue ? decrementValue() : setValue(value - 1))}
				disabled={value <= min}
				viewVariant="secondary"
				size={SIZES.s}
			>
				-
			</Button>
			<span>{value}</span>
			<Button
				className={styles.increment}
				onClick={() => (incrementValue ? incrementValue() : setValue(value + 1))}
				disabled={value >= max}
				viewVariant="secondary"
				size={SIZES.s}
			>
				+
			</Button>
		</span>
	);
};
