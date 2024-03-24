/* eslint-disable react/no-children-prop */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock.js';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<div>
		<section>
			<h2>{restaurants[0].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[0].menu[0].name}</li>
				<li>{restaurants[0].menu[1].name}</li>
				<li>{restaurants[0].menu[2].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[0].reviews[0].text}</li>
				<li>{restaurants[0].reviews[1].text}</li>
			</ul>
		</section>

		<section>
			<h2>{restaurants[1].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[1].menu[0].name}</li>
				<li>{restaurants[1].menu[1].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[1].reviews[0].text}</li>
				<li>{restaurants[1].reviews[1].text}</li>
				<li>{restaurants[1].reviews[2].text}</li>
			</ul>
		</section>

		<section>
			<h2>{restaurants[2].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[2].menu[0].name}</li>
				<li>{restaurants[2].menu[1].name}</li>
				<li>{restaurants[2].menu[2].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[2].reviews[0].text}</li>
			</ul>
		</section>

		<section>
			<h2>{restaurants[3].name}</h2>
			<h3>Меню</h3>
			<ul>
				<li>{restaurants[3].menu[0].name}</li>
				<li>{restaurants[3].menu[1].name}</li>
			</ul>
			<h3>Отзывы</h3>
			<ul>
				<li>{restaurants[3].reviews[0].text}</li>
				<li>{restaurants[3].reviews[1].text}</li>
			</ul>
		</section>
	</div>
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
