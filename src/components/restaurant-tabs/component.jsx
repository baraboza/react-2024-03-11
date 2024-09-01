import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RestaurantTab } from '../restaurant-tab/component.jsx';
import styles from './styles.module.scss';

export const RestaurantTabs = ({ onTabClick, currentId, className }) => {
	const restaurantIds = useSelector(state => state.restaurant.ids);

	return (
		<div className={classNames(styles.root, className)}>
			{restaurantIds.map(restaurantId => (
				// eslint-disable-next-line react/jsx-key
				<RestaurantTab
					className={styles.tab}
					isActive={restaurantId === currentId}
					restaurantId={restaurantId}
					onClick={() => onTabClick(restaurantId)}
				/>
			))}
		</div>
	);
};
