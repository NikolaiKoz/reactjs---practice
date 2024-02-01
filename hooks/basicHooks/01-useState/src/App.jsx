import React, { useState } from 'react';

const BtnCounter = () => {
	const [counterState, setCounterState] = useState(0);
	console.log('Pintando el BtnCounter');
	return (
		<button
			onClick={() => {
				setCounterState(counterState + 1);
				console.log('modificnado el BtnCounter');
			}}
		>
			El contador es [{counterState}]
		</button>
	);
};

export default function App() {
	console.log('Pintando el componente App \n\n\n');

	return <BtnCounter />;
}