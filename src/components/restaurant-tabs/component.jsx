import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RestaurantTab } from '../restaurant-tab/component.jsx';
import styles from './styles.module.scss';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors.js';

export const RestaurantTabs = ({ onTabClick, currentId, className }) => {
	const restaurantIds = useSelector(selectRestaurantIds);

	if (!restaurantIds?.length) {
		return null;
	}

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
