import classNames from "classnames";
import {Tab} from "../tab/component.jsx";

import styles from './styles.module.scss';

export const RestaurantTabs = ({ restaurants, onTabClick, currentIndex, className }) => {
	return (
		<div className={classNames(styles.root, className)}>
			{restaurants.map((restaurant, index) => (
				// eslint-disable-next-line react/jsx-key
				<Tab
					className={styles.tab}
					title={restaurant.name}
					isActive={index === currentIndex}
					onClick={() => onTabClick(index)}
				/>
			))}
		</div>
	)
}
