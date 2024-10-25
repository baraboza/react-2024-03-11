import classNames from 'classnames';
import styles from './styles.module.scss';
import { Counter } from '../counter/component.jsx';

export const DishCard = ({ className }) => {
	return (
		<div className={classNames(className, styles.root)}>
			<h2>Dish</h2>
			<p>
				<b>Цена</b>: 120$
			</p>

			<Counter className={styles.counter} value={0} max={5} />

			<h3>Ингредиенты</h3>
			<ul>
				<li>рыба</li>
				<li>сметана</li>
			</ul>
		</div>
	);
};
