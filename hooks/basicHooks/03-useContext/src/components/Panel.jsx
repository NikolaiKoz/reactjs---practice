import React, { useContext } from 'react';
import { counterContext } from '../context/counterContext';

export default function Panel() {
	const { counter } = useContext(counterContext);
	return <div>{counter}</div>;
}
