import { Layout } from './components/layout/component.jsx';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurants } from './redux/entities/restaurant/thunks/get-restaurants.js';
import { RestaurantContainer } from './components/restaurant/container.jsx';
import { RestaurantTabsContainer } from './components/restaurant-tabs/container.jsx';

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
						<RestaurantTabsContainer
							className="restaurant-page__tabs"
							currentId={currentRestaurantId}
							onTabClick={setCurrentRestaurantId}
						/>
						{currentRestaurantId && (
							<RestaurantContainer
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
