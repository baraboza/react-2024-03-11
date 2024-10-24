import classNames from 'classnames';
import styles from './styles.module.scss';

export const DishPage = ({ className }) => {
	return <div className={classNames(className, styles.root)}></div>;
};
