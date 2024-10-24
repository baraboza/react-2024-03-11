import classNames from 'classnames';
import styles from './styles.module.scss';
import { RestaurantTabsContainer } from '../restaurant-tabs/container.jsx';
import { Outlet } from 'react-router-dom';

export const Restaurants = ({ className }) => {
	return (
		<div className={classNames(className, styles.root)}>
			<div className="container">
				<div className={styles.box}>
					<RestaurantTabsContainer />

					<Outlet className={styles.restaurant} />
				</div>
			</div>
		</div>
	);
};
