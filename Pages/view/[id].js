import React from 'react';
import Results from '../../src/Containers/Results/Results';

import { useRouter } from 'next/router';

function ViewPage(props) {
	const router = useRouter();
	const { id } = router.query;
	let storedValue = null;
	if (process.browser) {
		storedValue = window.localStorage.getItem(id);
	}
	const data = storedValue ? JSON.parse(storedValue) : null;
	console.log(data);
	return <Results data={data} queryId={id} />;
}

export default ViewPage;

// ViewPage.getInitialProps = async (props) => {
//       const { id } = props.query;
//       let storedValue = null;
//       if(process.browser) {
//             storedValue = window.localStorage.getItem(id);
//       }
//       const data = storedValue ? JSON.parse(storedValue) : null;
//       return { data };
// }
// -> done
/* 
      1.return id for now.
      2. then depending on id retrieve appropriate thing 
            ---> id = gpa (get gpa from local storage and return it as a prop)
            ---> id = cgpa (get cgpa from local storage and return it as a prop)
*/
