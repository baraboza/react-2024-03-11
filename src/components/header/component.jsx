import classNames from 'classnames';
import styles from './styles.module.scss';
import { ThemeContext } from '../../contexts/theme.jsx';
import { Button } from '../button/component.jsx';
import { SIZES } from '../../constants/sizes.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.jsx';
import { NavLink } from 'react-router-dom';

export const Header = ({ className, setTheme, setUser }) => {
	const theme = useContext(ThemeContext);
	const user = useContext(UserContext);

	return (
		<header className={classNames(className, styles.root)}>
			<div className={classNames(styles.container, 'container')}>
				<span>Logo</span>

				<ThemeContext.Provider value="default">
					<Button
						className={styles.theme}
						size={SIZES.s}
						onClick={() => setTheme(theme === 'default' ? 'inverse' : 'default')}
					>
						Сменить тему
					</Button>
				</ThemeContext.Provider>

				<nav className={styles.nav}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							classNames({
								[styles.active]: isActive,
							})
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/restaurants"
						className={({ isActive }) =>
							classNames({
								[styles.active]: isActive,
							})
						}
					>
						Restaurants
					</NavLink>
				</nav>

				<div className={styles.user}>
					{user && <span className={styles.userName}>{user.name}</span>}

					<Button
						className={styles.userButton}
						viewVariant="secondary"
						onClick={() => setUser(user ? null : { name: 'Максим' })}
					>
						{user ? 'Выйти' : 'Войти'}
					</Button>
				</div>
			</div>
		</header>
	);
};
