import { Button } from '../button/component.jsx';
import { SIZES } from '../../constants/sizes.js';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Counter = ({ value, setValue, min = 0, max, className }) => {
	return (
		<span className={classNames(styles.root, className)}>
			<Button
				className={styles.decrement}
				onClick={() => setValue(value - 1)}
				disabled={value <= min}
				viewVariant="secondary"
				size={SIZES.s}
			>
				-
			</Button>
			<span>{value}</span>
			<Button
				className={styles.increment}
				onClick={() => setValue(value + 1)}
				disabled={value >= max}
				viewVariant="secondary"
				size={SIZES.s}
			>
				+
			</Button>
		</span>
	);
};
