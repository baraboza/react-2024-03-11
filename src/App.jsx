import { Layout } from './components/layout/component.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home.jsx';
import { RestaurantsPage } from './pages/restaurants.jsx';
import { RestaurantContainer } from './components/restaurant/container.jsx';
import { ReviewsContainer } from './components/reviews/container.jsx';
import { MenuContainer } from './components/menu/container.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'restaurants/',
				element: <RestaurantsPage />,
				children: [
					{
						path: ':restaurantId',
						element: <RestaurantContainer />,
						children: [
							{
								path: 'menu',
								element: <MenuContainer />,
							},
							{
								path: 'reviews',
								element: <ReviewsContainer />,
							},
						],
					},
				],
			},
		],
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
