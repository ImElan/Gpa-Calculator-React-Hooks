import React, { useState, useEffect } from 'react';
import CardsContainer from '../../Components/Results/CardsContainer';

import { Container } from 'react-bootstrap';

function Results(props) {
	const { data, queryId } = props;

	const [results, setResults] = useState(data);

	useEffect(() => {
		setResults(data);
	}, [data]);

	const editElement = (id, newVal) => {
		const updatedResults = results.map((result) => {
			if (result.id === id) {
				return {
					...result,
					credits: newVal.credits,
					title: newVal.title,
					result: newVal.result,
				};
			} else {
				return result;
			}
		});
		// update in local storage
		window.localStorage.setItem(queryId, JSON.stringify(updatedResults));
		// update in state
		setResults(updatedResults);
	};

	const deleteElement = (id) => {
		const updatedResults = results.filter((result) => result.id !== id);
		window.localStorage.setItem(queryId, JSON.stringify(updatedResults));
		setResults(updatedResults);
	};

	return (
		<Container>
			<CardsContainer
				data={results}
				queryId={queryId}
				editElement={editElement}
				deleteElement={deleteElement}
			/>
		</Container>
	);
}

export default Results;
