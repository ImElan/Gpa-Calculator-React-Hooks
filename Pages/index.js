import React from 'react';
import GpaCalculation from '../src/Containers/GpaCalculation/GpaCalculation';

function HomePage() {
	let storedConfig;
	if (process.browser) {
		storedConfig = window.localStorage.getItem('config');
	}

	return <GpaCalculation config={storedConfig} />;
}

/* 
      TODO:
      1. Check whether the user has already configured the app for credit grade point in -> GET INITIAL PROPS METHOD <-
      and pass that prop to gpa calculation component.
      2. in gpa calculation 
            if not configured -> open a configuration modal
            if configured used that one.
*/

export default HomePage;
