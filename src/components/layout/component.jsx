import styles from './styles.module.scss';
import { ThemeContext } from '../../contexts/theme.jsx';
import { useState } from 'react';
import { UserContext } from '../../contexts/user.jsx';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/component.jsx';

export const Layout = () => {
	const [theme, setTheme] = useState('default');
	const [user, setUser] = useState(null);

	return (
		<div className={styles.root}>
			<ThemeContext.Provider value={theme}>
				<UserContext.Provider value={user}>
					<Header setTheme={setTheme} setUser={setUser} />

					<div className={styles.main}>
						<Outlet />
					</div>

					<footer className={styles.footer}>
						<div className="container">
							<span>Logo</span>
						</div>
					</footer>
				</UserContext.Provider>
			</ThemeContext.Provider>
		</div>
	);
};
