export const Counter = ({value, setValue}) => {
	return (
		<span>
			<button onClick={() => setValue(value - 1)} disabled={value <= 0}>-</button>
			<span>{value}</span>
			<button onClick={() => setValue(value + 1)}>+</button>
		</span>
	)
}
