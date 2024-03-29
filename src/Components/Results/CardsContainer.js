import React from 'react';
import GpaCgpaCard from './GpaCgpaCard';

import { Row } from 'react-bootstrap';

function CardsContainer(props) {
	const { data, queryId, editElement, deleteElement, addToCgpaCalculation } = props;
	let resultLabel;
	let resultPlaceholder;
	if (queryId === 'gpa') {
		resultLabel = 'Gpa';
		resultPlaceholder = 'Enter New Gpa';
	} else {
		resultLabel = 'CGpa';
		resultPlaceholder = 'Enter New CGpa';
	}
	return (
		<Row>
			{data &&
				data.map((singleResult) => (
					<GpaCgpaCard
						queryId={queryId}
						resultLabel={resultLabel}
						resultPlaceholder={resultPlaceholder}
						title={singleResult.title}
						credits={singleResult.credits}
						result={singleResult.result}
						key={singleResult.id}
						id={singleResult.id}
						editElement={editElement}
						deleteElement={deleteElement}
						addToCgpaCalculation={addToCgpaCalculation}
					/>
				))}
		</Row>
	);
}

export default CardsContainer;
