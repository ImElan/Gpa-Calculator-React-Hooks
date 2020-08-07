import React from 'react';
import GpaCalculation from '../src/Containers/GpaCalculation/GpaCalculation';

function HomePage() {
	let storedConfig;
	if (process.browser) {
		storedConfig = window.localStorage.getItem('config');
	}

	return <GpaCalculation config={storedConfig} />;
}

export default HomePage;
