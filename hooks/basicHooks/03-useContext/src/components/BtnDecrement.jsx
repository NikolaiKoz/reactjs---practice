import React, { useContext } from 'react';
import { counterContext } from '../context/counterContext';

export default function BtnDecrement() {
	const { decrement } = useContext(counterContext);

	return <button onClick={() => decrement()}>BtnDecrement</button>;
}
