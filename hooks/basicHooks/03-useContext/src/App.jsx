import React from 'react';
import StateCompo from './context/StateCompo';
import Panel from './components/Panel';
import BtnIncrement from './components/BtnIncrement';
import BtnDecrement from './components/BtnDecrement';
import BtnReset from './components/BtnReset';

export default function App() {
	return (
		<StateCompo>
			<Panel />
			<BtnIncrement />
			<BtnDecrement />
			<BtnReset />
		</StateCompo>
	);
}
