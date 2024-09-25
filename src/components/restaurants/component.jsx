import classNames from 'classnames';
import styles from './styles.module.scss';
import { RestaurantTabsContainer } from '../restaurant-tabs/container.jsx';
import { RestaurantContainer } from '../restaurant/container.jsx';
import { useState } from 'react';

export const Restaurants = ({ className }) => {
	const [currentRestaurantId, setCurrentRestaurantId] = useState();

	return (
		<div className={classNames(className, styles.root)}>
			<div className="container">
				<div className={styles.box}>
					<RestaurantTabsContainer
						currentId={currentRestaurantId}
						onTabClick={setCurrentRestaurantId}
					/>
					{currentRestaurantId && (
						<RestaurantContainer className={styles.restaurant} restaurantId={currentRestaurantId} />
					)}
				</div>
			</div>
		</div>
	);
};
