import React from 'react';

import { useInputState } from '../../../hooks/useInputState';

import { Col, InputGroup, Form } from 'react-bootstrap';

function ConfigElement(props) {
	const { id, gradeChange, gradePointChange } = props;

	const [grade, handleGradeChange, resetGrade] = useInputState('');
	const [gradePoint, handleGradePointChange, resetGradePoint] = useInputState('');

	const gradeChangeHandler = (event) => {
		handleGradeChange(event);
		gradeChange(id, event.target.value);
	};

	const gradePointChangeHandler = (event) => {
		handleGradePointChange(event);
		gradePointChange(id, event.target.value);
	};

	return (
		<Col md={11} className='mb-3'>
			<InputGroup className='group d-flex align-items-center'>
				<InputGroup.Prepend>
					<InputGroup.Text>Grade</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
					className='mr-4'
					type='text'
					placeholder='Eg : A'
					value={grade}
					onChange={gradeChangeHandler}
				/>
				<InputGroup.Prepend>
					<InputGroup.Text>Grade Point</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
					type='number'
					step='1'
					placeholder='Eg : 8'
					value={gradePoint}
					onChange={gradePointChangeHandler}
				/>
			</InputGroup>
		</Col>
	);
}

export default ConfigElement;
