import {restaurants} from "./constants/mock.js";
import {Restaurant} from "./components/restaurant/component.jsx";
import {Layout} from "./components/layout/components.jsx";
import {useEffect, useState} from "react";
import {RestaurantTabs} from "./components/restaurant-tabs/component.jsx";
import {getStorageItem, setStorageItem} from "./utils/storage.js";
import {STORAGE_KEYS} from "./constants/storage.js";

export const App = () => {
	const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(
		() => Number(getStorageItem(STORAGE_KEYS.currentRestaurantIndex)) || 0
	)
	const currentRestaurant = restaurants[currentRestaurantIndex]

	useEffect(() => {
		setStorageItem(STORAGE_KEYS.currentRestaurantIndex, currentRestaurantIndex)
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
