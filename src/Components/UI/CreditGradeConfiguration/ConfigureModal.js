import React, { useState } from 'react';
import ConfigForm from './ConfigForm';

import { v4 as uuidv4 } from 'uuid';

import { Modal, Button, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';

function ConfigureModal(props) {
	const {
		numGrades,
		show,
		showValidationAlert,
		hideValidationAlert,
		closeHandler,
		saveHandler,
		useDefaultHandler,
	} = props;
	const defaultArr = Array.from({ length: numGrades }).map((_) => ({
		id: uuidv4(),
		grade: '',
		gradePoint: '',
	}));
	const [format, setFormat] = useState(defaultArr);

	const gradeChange = (id, newGrade) => {
		const updatedArr = format.map((singleElement) => {
			if (singleElement.id === id) {
				return {
					...singleElement,
					grade: newGrade.toUpperCase(),
				};
			} else {
				return singleElement;
			}
		});
		setFormat(updatedArr);
	};

	const gradePointChange = (id, newGradePoint) => {
		const updatedArr = format.map((singleElement) => {
			if (singleElement.id === id) {
				return {
					...singleElement,
					gradePoint: +newGradePoint,
				};
			} else {
				return singleElement;
			}
		});
		setFormat(updatedArr);
	};

	const handleSave = () => {
		saveHandler(format);
	};

	return (
		<Modal centered show={show} onHide={closeHandler} backdrop='static' keyboard={false}>
			<Modal.Header>
				<Modal.Title>Configure Your Credit Grade System</Modal.Title>
			</Modal.Header>
			{showValidationAlert && (
				<Alert variant='danger' onClose={hideValidationAlert} dismissible>
					<h5>Fields can't be empty.</h5>
				</Alert>
			)}
			<Modal.Body>
				<div className='d-flex align-items-center mb-3'>
					Use the default Value ?
					<OverlayTrigger
						placement='bottom'
						overlay={
							<Tooltip>
								<ul
									style={{
										listStyle: 'none',
										padding: '0 20px',
									}}
								>
									<li>O - 10</li>
									<li>A+ - 9</li>
									<li>A - 8</li>
									<li>B+ - 7</li>
									<li>B - 6</li>
								</ul>
							</Tooltip>
						}
					>
						<Button variant='link' onClick={useDefaultHandler}>
							Use Default
						</Button>
					</OverlayTrigger>
				</div>
				<ConfigForm
					format={format}
					gradeChange={gradeChange}
					gradePointChange={gradePointChange}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='primary' onClick={handleSave}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ConfigureModal;
