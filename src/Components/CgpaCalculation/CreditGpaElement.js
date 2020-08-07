import React from 'react';

import { useInputState } from '../../hooks/useInputState';

import trashIcon from '../../assets/trash-solid.svg';

import { Col, InputGroup, Form } from 'react-bootstrap';

function CreditGpaElement(props) {
	const { id, creditGpa, changeCredit, changeGpa, deleteCreditGpaElement } = props;
	const [credits, handleCreditsChange, resetCredits] = useInputState(creditGpa.credit);
	const [gpa, handleGpaChange, resetGpa] = useInputState(creditGpa.gpa);

	const creditChangeHandler = (event) => {
		handleCreditsChange(event);
		changeCredit(creditGpa.id, +event.target.value);
	};

	const gpaChangeHandler = (event) => {
		handleGpaChange(event);
		changeGpa(creditGpa.id, +event.target.value);
	};

	const handleDelete = () => {
		deleteCreditGpaElement(id);
	};

	return (
		<Col md={8} className='mb-3'>
			<InputGroup className='group d-flex align-items-center'>
				<InputGroup.Prepend>
					<InputGroup.Text>Credits</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
					className='mr-4'
					type='number'
					step='1'
					placeholder='Example : 23'
					value={credits}
					onChange={creditChangeHandler}
				/>
				<InputGroup.Prepend>
					<InputGroup.Text>GPA</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
					type='number'
					step='0.001'
					placeholder='Example : 7.432 '
					value={gpa}
					onChange={gpaChangeHandler}
				/>
				<img
					className='trashIcon ml-3'
					src={trashIcon}
					alt='Delete'
					onClick={handleDelete}
				/>
			</InputGroup>
		</Col>
	);
}

export default CreditGpaElement;
