import classNames from 'classnames';
import styles from './styles.module.scss';
import { Button } from '../button/component.jsx';

export const Tab = ({ className, title, onClick, isActive }) => {
	return (
		<Button
			className={classNames(className, styles.root)}
			onClick={onClick}
			viewVariant={isActive ? 'primary' : 'secondary'}
		>
			{title}
		</Button>
	);
};
