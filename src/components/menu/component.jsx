import {Dish} from "../dish/component.jsx";

export const Menu = ({menu}) => {
	return (
		<ul>
			{menu.map((dish) => (
				// eslint-disable-next-line react/jsx-key
				<li>
					<Dish dish={dish}/>
				</li>
			))}
		</ul>
	)
}
