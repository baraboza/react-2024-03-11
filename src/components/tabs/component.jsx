import classNames from 'classnames';
import styles from './styles.module.scss';
import { Tab } from '../tab/component.jsx';

export const Tabs = ({ className, tabs, activeTabKey, onTabClick }) => {
	return (
		<div className={classNames(className, styles.root)}>
			{tabs.map(tab => (
				// eslint-disable-next-line react/jsx-key
				<Tab
					className={styles.tab}
					title={tab.title}
					isActive={activeTabKey === tab.key}
					onClick={() => onTabClick(tab)}
				/>
			))}
		</div>
	);
};
