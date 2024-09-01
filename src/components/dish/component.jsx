import {Counter} from "../counter/component.jsx";
import {useContext, useState} from "react";

import styles from "./styles.module.scss"
import classNames from "classnames";
import {UserContext} from "../../contexts/user.jsx";

export const Dish = ({dish, className}) => {
	const [count, setCount] = useState(0)
	const user = useContext(UserContext)

	return (
		<div className={classNames(styles.root, className)}>
			<span>{dish.name}</span>
			{user &&<Counter className={styles.counter} value={count} setValue={setCount} max={5}/>}
		</div>
	)
}
