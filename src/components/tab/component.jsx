import {Button} from "../button/component.jsx";

export const Tab = ({title, isActive, onClick, className}) => {
	return (
		<Button
			className={className}
			onClick={onClick}
			viewVariant={isActive ? "primary" : "secondary"}
		>
			{title}
		</Button>
	)
}
