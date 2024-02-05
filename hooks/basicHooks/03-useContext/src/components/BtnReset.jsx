import React, { useContext } from 'react';
import { counterContext } from '../context/counterContext';

export default function BtnReset() {
	const { reset } = useContext(counterContext);
	return <button onClick={() => reset()}>BtnReset</button>;
}
