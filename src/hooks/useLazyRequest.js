import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRequestStatus } from '../redux/ui/request/selectors.js';

export const useLazyRequest = (thunk, ...params) => {
	const [request, setRequest] = useState();

	const status = useSelector(state => selectRequestStatus(state, request?.requestId));

	const dispatch = useDispatch();

	const makeRequest = useCallback(() => {
		setRequest(dispatch(thunk(...params)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, thunk, ...params]);

	return [status, makeRequest];
};
