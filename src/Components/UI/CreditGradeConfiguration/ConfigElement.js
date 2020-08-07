import React from 'react';
import { Col, InputGroup, Form } from 'react-bootstrap';

function ConfigElement(props) {
	return (
		<Col md={11} className='mb-3'>
			<InputGroup className='group d-flex align-items-center'>
				<InputGroup.Prepend>
					<InputGroup.Text>Grade</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control className='mr-4' type='text' placeholder='A' />
				<InputGroup.Prepend>
					<InputGroup.Text>Grade Point</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control type='number' step='1' placeholder='8 ' />
			</InputGroup>
		</Col>
	);
}

export default ConfigElement;
