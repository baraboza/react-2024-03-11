import {Tab} from "../tab/component.jsx";

export const RestaurantTabs = ({restaurants, onTabClick, currentIndex}) => {
	return (
		<div>
			{restaurants.map((restaurant, index) => (
				// eslint-disable-next-line react/jsx-key
				<Tab
					title={restaurant.name}
					isActive={index === currentIndex}
					onClick={() => onTabClick(index)}
				/>
			))}
		</div>
	)
}
