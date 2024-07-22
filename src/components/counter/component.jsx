export const Counter = ({value, setValue, min = 0, max}) => {
	return (
		<span>
			<button onClick={() => setValue(value - 1)} disabled={value <= min}>-</button>
			<span>{value}</span>
			<button onClick={() => setValue(value + 1)} disabled={value >= max}>+</button>
		</span>
	)
}
