import {Counter} from "../counter/component.jsx";
import {useState} from "react";

export const Dish = ({dish}) => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<span>{dish.name}</span>
			<Counter value={count} setValue={setCount}/>
		</div>
	)
}
