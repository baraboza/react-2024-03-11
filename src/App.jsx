import { Restaurant } from './components/restaurant/component.jsx';
import { Layout } from './components/layout/component.jsx';
import { useState } from 'react';
import { RestaurantTabs } from './components/restaurant-tabs/component.jsx';
import { getStorageItem, setStorageItem } from './utils/storage.js';
import { STORAGE_KEYS } from './constants/storage.js';

export const App = () => {
	const [currentRestaurantId, setCurrentRestaurantId] = useState(() =>
		getStorageItem(STORAGE_KEYS.currentRestaurantId),
	);

	return (
		<Layout>
			<div className="restaurant-page">
				<div className="container">
					<div className="restaurant-page__box">
						<RestaurantTabs
							className="restaurant-page__tabs"
							currentId={currentRestaurantId}
							onTabClick={id => {
								setCurrentRestaurantId(id);
								setStorageItem(STORAGE_KEYS.currentRestaurantId, id);
							}}
						/>
						{currentRestaurantId && (
							<Restaurant
								className="restaurant-page__restaurant"
								restaurantId={currentRestaurantId}
							/>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};
