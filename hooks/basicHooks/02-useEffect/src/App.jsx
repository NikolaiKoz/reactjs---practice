import React, { useState, useEffect } from 'react';

export default function App() {
	console.log('Cargando app')
	const [contador, setContador] = useState(0);

	useEffect(() => {
		console.log(contador);
		document.title = contador;
	}, [contador]);
	return (
		<div>
			<button
				onClick={() => {
					console.log('Cargando btn');
					setContador(contador + 1);
				}}
			>
				+1
			</button>
		</div>
	);
}
