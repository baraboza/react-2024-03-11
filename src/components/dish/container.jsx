import { Dish } from './component.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useContext } from 'react';
import { UserContext } from '../../contexts/user.jsx';
import { selectDishById } from '../../redux/entities/dish/selectors.js';
import { selectCartDishAmount } from '../../redux/ui/cart/selectors.js';
import { setDishAmount } from '../../redux/ui/cart/index.js';

export const DishContainer = ({ dishId, ...props }) => {
	const dispatch = useDispatch();
	const user = useContext(UserContext);

	const dish = useSelector(state => selectDishById(state, dishId));
	const amount = useSelector(state => selectCartDishAmount(state, dishId));

	const setAmountCallback = useCallback(
		amount => dispatch(setDishAmount({ id: dishId, amount })),
		[dishId, dispatch],
	);

	if (!dish) {
		return null;
	}

	return (
		<Dish {...props} dish={dish} amount={amount} setAmount={setAmountCallback} withCart={!!user} />
	);
};
