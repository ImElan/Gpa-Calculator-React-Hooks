import React from 'react';
import ConfigElement from './ConfigElement';

import { Row } from 'react-bootstrap';

function ConfigForm(props) {
	return (
		<Row className='justify-content-center'>
			<ConfigElement />
			<ConfigElement />
			<ConfigElement />
		</Row>
	);
}

export default ConfigForm;
