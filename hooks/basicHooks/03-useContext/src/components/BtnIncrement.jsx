import React, { useContext } from 'react';
import { counterContext } from '../context/counterContext';

export default function BtnIncrement() {
	const { increment } = useContext(counterContext);

	return <button onClick={() => increment()}>BtnIncrement</button>;
}
