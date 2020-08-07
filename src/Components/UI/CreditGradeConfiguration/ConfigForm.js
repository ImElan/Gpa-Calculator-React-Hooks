import React from 'react';
import ConfigElement from './ConfigElement';

import { Row } from 'react-bootstrap';

function ConfigForm(props) {
	const { format, gradeChange, gradePointChange } = props;
	return (
		<Row className='justify-content-center'>
			{format.map((singleElement) => (
				<ConfigElement
					key={singleElement.id}
					id={singleElement.id}
					gradeChange={gradeChange}
					gradePointChange={gradePointChange}
				/>
			))}
		</Row>
	);
}

export default ConfigForm;
