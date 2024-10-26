import { DishCard } from './component.jsx';
import { useRequest } from '../../hooks/useRequest.js';
import { REQUEST_STATUSES } from '../../redux/ui/request/constants.js';
import { getDish } from '../../redux/entities/dish/thunks/get-dish.js';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors.js';
import { selectCartDishAmount } from '../../redux/ui/cart/selectors.js';
import { useCallback, useContext } from 'react';
import { setDishAmount } from '../../redux/ui/cart/index.js';
import { UserContext } from '../../contexts/user.jsx';

export const DishCardContainer = ({ ...props }) => {
	const { dishId } = useParams();
	const dispatch = useDispatch();
	const user = useContext(UserContext);
	const requestStatus = useRequest(getDish, dishId);

	const dish = useSelector(state => selectDishById(state, dishId));
	const amount = useSelector(state => selectCartDishAmount(state, dishId));

	const setAmountCallback = useCallback(
		amount => dispatch(setDishAmount({ id: dishId, amount })),
		[dishId, dispatch],
	);

	if (requestStatus === REQUEST_STATUSES.pending) {
		return <div>Loading...</div>;
	}

	if (!dish) {
		return null;
	}

	return (
		<DishCard
			{...props}
			dish={dish}
			amount={amount}
			setAmount={setAmountCallback}
			withCart={!!user}
		/>
	);
};
