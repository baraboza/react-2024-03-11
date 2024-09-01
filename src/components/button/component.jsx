import classNames from "classnames";
import styles from "./styles.module.scss";
import {SIZES} from "../../constants/sizes.js";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/theme.jsx";

export const Button = ({
	className,
	children,
	onClick,
	disabled,
	viewVariant = "primary",
	size = SIZES.m
}) => {
	const theme = useContext(ThemeContext)

	return (
		<button
			className={classNames(styles.root, className, styles[viewVariant], styles[size], {
				[styles.disabled]: disabled,
				[styles[theme]]: theme !== "default"
			})}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
