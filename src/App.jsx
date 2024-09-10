import { Restaurant } from './components/restaurant/component.jsx';
import { Layout } from './components/layout/component.jsx';
import { useEffect, useState } from 'react';
import { RestaurantTabs } from './components/restaurant-tabs/component.jsx';
import { useDispatch } from 'react-redux';
import { getRestaurants } from './redux/entities/restaurant/thunks/get-restaurants.js';

export const App = () => {
	const [currentRestaurantId, setCurrentRestaurantId] = useState();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch]);

	return (
		<Layout>
			<div className="restaurant-page">
				<div className="container">
					<div className="restaurant-page__box">
						<RestaurantTabs
							className="restaurant-page__tabs"
							currentId={currentRestaurantId}
							onTabClick={setCurrentRestaurantId}
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
