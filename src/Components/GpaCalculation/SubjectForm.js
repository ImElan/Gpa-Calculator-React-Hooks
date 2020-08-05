import React, { forwardRef, useImperativeHandle } from 'react';

// Custom Hooks
import { useInputState } from '../../hooks/useInputState';

// BootStrap
import { InputGroup, Form, Row, Col } from 'react-bootstrap';

function SubjectForm(props, ref) {
	const { num } = props;
	const [input, handleChange, resetInput] = useInputState(num);
	const { tag, totalSubjects, handleInputChange, handleArrayChange } = props;

	const renderOptions = Array.from({ length: totalSubjects + 1 }).map((_, index) => (
		<option key={index}>{index}</option>
	));

	const handleInputNumberChange = (event) => {
		const newNumber = +event.target.value;
		handleChange(event);
		handleInputChange(newNumber);
		handleArrayChange(newNumber);
	};

	useImperativeHandle(ref, () => ({
		resetInput,
		handleChange,
	}));

	return (
		<Row className='justify-content-center'>
			<Col md={6}>
				<InputGroup>
					<InputGroup.Prepend>
						<InputGroup.Text id='basic-addon1'>
							Enter Number Of {tag}
						</InputGroup.Text>
					</InputGroup.Prepend>
					<Form.Control
						as='select'
						value={input}
						onChange={handleInputNumberChange}
					>
						{renderOptions}
					</Form.Control>
				</InputGroup>
			</Col>
		</Row>
	);
}

export default forwardRef(SubjectForm);
