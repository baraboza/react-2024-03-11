import styles from "./styles.module.scss";
import classNames from "classnames";
import {Button} from "../button/component.jsx";
import {SIZES} from "../../constants/sizes.js";
import {ThemeContext} from "../../contexts/theme.jsx";
import {useState} from "react";
import {UserContext} from "../../contexts/user.jsx";

export const Layout = ({children}) => {
	const [theme, setTheme] = useState("default")
	const [user, setUser] = useState(null)

	return (
		<div className={styles.root}>
			<ThemeContext.Provider value={theme}>
				<UserContext.Provider value={user}>
					<header className={styles.header}>
						<div className={classNames(styles.headerContainer, "container")}>
							<span>Logo</span>


							<ThemeContext.Provider value="default">
								<Button
									className={styles.theme}
									size={SIZES.s}
									onClick={() => setTheme(theme === "default" ? "inverse" : "default")}
								>
									Сменить тему
								</Button>
							</ThemeContext.Provider>

							<div className={styles.user}>
								{user && <span className={styles.userName}>{user.name}</span>}

								<Button
									className={styles.userButton}
									viewVariant="secondary"
									onClick={() => setUser(user ? null : {name: "Максим"})}
								>
									{user ? "Выйти" : "Войти"}
								</Button>
							</div>
						</div>
					</header>

					<div className={styles.main}>
						{children}
					</div>

					<footer className={styles.footer}>
						<div className="container">
							<span>Logo</span>
						</div>
					</footer>
				</UserContext.Provider>
			</ThemeContext.Provider>
		</div>
	)
}
