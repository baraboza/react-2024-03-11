import {Menu} from "../menu/component.jsx";
import {Reviews} from "../reviews/component.jsx";
import {useCounter} from "../../hooks/useCounter.js";

export const Restaurant = ({restaurant}) => {
	const {amount, decrement, increment} = useCounter()


	if (!restaurant) {
		return null
	}

	const { name, menu, reviews } = restaurant

	return (
		<div>
			<h2>{name}</h2>
			<div>
				<button onClick={decrement} disabled={amount === 0}>-</button>
				<span>{amount}</span>
				<button onClick={increment} disabled={amount === 5}>+</button>
			</div>

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
