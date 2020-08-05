import React from 'react';

import { useInputState } from '../../hooks/useInputState';

import { InputGroup, Form, Col } from 'react-bootstrap';

import trashIcon from '../../assets/trash-solid.svg';

const renderCreditOptions = Array.from({ length: 5 }).map((_, index) => (
	<option key={index}>{index + 1}</option>
));

function CreditGradeElement(props) {
	const {
		id,
		grades,
		creditGrade,
		changeCredit,
		changeGrade,
		deleteCreditGradeElement,
	} = props;
	const [credit, handleCreditChange, resetCredit] = useInputState(creditGrade.credit);
	const [grade, handleGradeChange, resetGrade] = useInputState(creditGrade.grade);

	const renderGradesOption = grades.map((grade, index) => <option key={index}>{grade}</option>);

	const creditChangeHandler = (event) => {
		handleCreditChange(event);
		changeCredit(creditGrade.id, event.target.value);
	};

	const gradeChangeHandler = (event) => {
		handleGradeChange(event);
		changeGrade(creditGrade.id, event.target.value);
	};

	const handleDelete = () => {
		deleteCreditGradeElement(id);
	};

	return (
		<Col md={8} className='mb-3'>
			<InputGroup className='group d-flex align-items-center'>
				<InputGroup.Prepend>
					<InputGroup.Text>Credits</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
					as='select'
					className='mr-4'
					value={credit}
					onChange={creditChangeHandler}
				>
					{renderCreditOptions}
				</Form.Control>
				<InputGroup.Prepend>
					<InputGroup.Text>Grades</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control as='select' value={grade} onChange={gradeChangeHandler}>
					{renderGradesOption}
				</Form.Control>
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

export default CreditGradeElement;
