import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRequestStatus } from '../redux/ui/request/selectors.js';

export const useRequest = (thunk, ...params) => {
	const [request, setRequest] = useState();

	const status = useSelector(state => selectRequestStatus(state, request?.requestId));

	const dispatch = useDispatch();

	useEffect(() => {
		const request = dispatch(thunk(...params));

		setRequest(request);

		return () => {
			request.abort();
			setRequest(null);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, thunk, ...params]);

	return status;
};
