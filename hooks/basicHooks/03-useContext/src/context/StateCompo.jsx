import React, { useState } from 'react';
import { counterContext } from './counterContext';
import PropTypes from 'prop-types';

export default function StateCompo({ children }) {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(0);
	};
	return (
		<counterContext.Provider value={{ counter, increment, decrement, reset }}>
			{children}
		</counterContext.Provider>
	);
}

StateCompo.propTypes = {
	children: PropTypes.node.isRequired,
};
