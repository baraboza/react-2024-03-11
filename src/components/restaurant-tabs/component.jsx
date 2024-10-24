import classNames from 'classnames';
import styles from './styles.module.scss';
import { RestaurantTabContainer } from '../restaurant-tab/container.jsx';

export const RestaurantTabs = ({ className, restaurantIds, currentId }) => {
	return (
		<div className={classNames(styles.root, className)}>
			{restaurantIds.map(restaurantId => (
				// eslint-disable-next-line react/jsx-key
				<RestaurantTabContainer
					className={styles.tab}
					isActive={String(restaurantId) === currentId}
					restaurantId={restaurantId}
				/>
			))}
		</div>
	);
};
