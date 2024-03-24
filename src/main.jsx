/* eslint-disable react/no-children-prop */
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock.js';
import {Layout} from "./components/layout/components.jsx";
import {Restaurant} from "./components/restaurant/component.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Layout>
		<div>
			{restaurants.map(restaurant => (
				// eslint-disable-next-line react/jsx-key
				<Restaurant restaurant={restaurant}/>
			))}
		</div>
	</Layout>
)

// root.render(
// 	React.createElement('div', {
// 		children: [
// 			React.createElement('section', {
// 				children: [
// 					React.createElement('h2', { children: restaurants[0].name }),
// 					React.createElement('h3', { children: 'Меню' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[0].menu[0].name }),
// 							React.createElement('li', { children: restaurants[0].menu[1].name }),
// 							React.createElement('li', { children: restaurants[0].menu[2].name })
// 						]
// 					}),
// 					React.createElement('h3', { children: 'Отзывы' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[0].reviews[0].text }),
// 							React.createElement('li', { children: restaurants[0].reviews[1].text })
// 						]
// 					})
// 				]
// 			}),
//
// 			React.createElement('section', {
// 				children: [
// 					React.createElement('h2', { children: restaurants[1].name }),
// 					React.createElement('h3', { children: 'Меню' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[1].menu[0].name }),
// 							React.createElement('li', { children: restaurants[1].menu[1].name })
// 						]
// 					}),
// 					React.createElement('h3', { children: 'Отзывы' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[1].reviews[0].text }),
// 							React.createElement('li', { children: restaurants[1].reviews[1].text }),
// 							React.createElement('li', { children: restaurants[1].reviews[2].text })
// 						]
// 					})
// 				]
// 			}),
//
// 			React.createElement('section', {
// 				children: [
// 					React.createElement('h2', { children: restaurants[2].name }),
// 					React.createElement('h3', { children: 'Меню' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[2].menu[0].name }),
// 							React.createElement('li', { children: restaurants[2].menu[1].name }),
// 							React.createElement('li', { children: restaurants[2].menu[2].name })
// 						]
// 					}),
// 					React.createElement('h3', { children: 'Отзывы' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[2].reviews[0].text })
// 						]
// 					})
// 				]
// 			}),
//
// 			React.createElement('section', {
// 				children: [
// 					React.createElement('h2', { children: restaurants[3].name }),
// 					React.createElement('h3', { children: 'Меню' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[3].menu[0].name }),
// 							React.createElement('li', { children: restaurants[3].menu[1].name })
// 						]
// 					}),
// 					React.createElement('h3', { children: 'Отзывы' }),
// 					React.createElement('ul', {
// 						children: [
// 							React.createElement('li', { children: restaurants[3].reviews[0].text }),
// 							React.createElement('li', { children: restaurants[3].reviews[1].text })
// 						]
// 					})
// 				]
// 			})
// 		]
// 	})
// )
