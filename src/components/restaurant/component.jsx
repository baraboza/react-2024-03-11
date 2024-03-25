import {Menu} from "../menu/component.jsx";
import {Reviews} from "../reviews/component.jsx";

export const Restaurant = ({restaurant}) => {
	if (!restaurant) {
		return null
	}

	const { name, menu, reviews } = restaurant

	return (
		<div>
			<h2>{name}</h2>
			<div>
				<h3>Меню</h3>
				<Menu menu={menu}/>
			</div>
			<div>
				<h3>Отзывы</h3>
				<Reviews reviews={reviews}/>
			</div>
		</div>
	)
}
