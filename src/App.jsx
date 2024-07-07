import {restaurants} from "./constants/mock.js";
import {Restaurant} from "./components/restaurant/component.jsx";
import {Layout} from "./components/layout/components.jsx";
import {useEffect, useState} from "react";
import {RestaurantTabs} from "./components/restaurant-tabs/component.jsx";

const getCurrentRestaurantIndexFromLS = () => {
	return Number(localStorage.getItem('currentRestaurantIndex')) || 0
}

const saveCurrentRestaurantIndexToLS = (value) => {
	localStorage.setItem('currentRestaurantIndex', value)
}

export const App = () => {
	const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(getCurrentRestaurantIndexFromLS)
	const currentRestaurant = restaurants[currentRestaurantIndex]

	useEffect(() => {
		saveCurrentRestaurantIndexToLS(currentRestaurantIndex)
	}, [currentRestaurantIndex])

	return (
		<Layout>
			<div>
				<RestaurantTabs
					restaurants={restaurants}
					currentIndex={currentRestaurantIndex}
					onTabClick={setCurrentRestaurantIndex}
				/>
				{currentRestaurant && <Restaurant restaurant={currentRestaurant}/>}
			</div>
		</Layout>
	)
}
