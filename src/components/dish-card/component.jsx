import classNames from 'classnames';
import styles from './styles.module.scss';
import { Counter } from '../counter/component.jsx';

export const DishCard = ({ className, dish, amount, setAmount, withCart }) => {
	return (
		<div className={classNames(className, styles.root)}>
			<h2>{dish.name}</h2>
			<p>
				<b>Цена</b>: {dish.price}$
			</p>

			{withCart && <Counter value={amount} setValue={setAmount} max={5} />}

			<h3>Ингредиенты</h3>
			<ul>
				{dish.ingredients?.map(({ text }) => (
					// eslint-disable-next-line react/jsx-key
					<li>{text}</li>
				))}
			</ul>
		</div>
	);
};
