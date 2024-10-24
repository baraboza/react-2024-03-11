import classNames from 'classnames';

import styles from './styles.module.scss';
import { Tabs } from '../tabs/component.jsx';
import { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const TABS = [
	{
		key: 'menu',
		title: 'Меню',
	},
	{
		key: 'reviews',
		title: 'Отзывы',
	},
];

export const Restaurant = ({ className, restaurant }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const activeTabKey = location.pathname.split('/').pop();

	useEffect(() => {
		if (!TABS.some(tab => tab.key === activeTabKey)) {
			navigate(`/restaurants/${restaurant.id}/menu`, { replace: true });
		}
	}, [activeTabKey, navigate, restaurant.id]);

	const navigateToTab = useCallback(
		tab => {
			navigate(`/restaurants/${restaurant.id}/${tab.key}`);
		},
		[navigate, restaurant.id],
	);

	return (
		<div className={classNames(styles.root, className)}>
			<h2>{restaurant.name}</h2>

			<Tabs tabs={TABS} onTabClick={navigateToTab} activeTabKey={activeTabKey} />

			<Outlet />
		</div>
	);
};
