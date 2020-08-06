import React, { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import { useInputState } from '../../hooks/useInputState';

function EnterNameModal(props) {
	const { show, queryId, placeholder, validation, handleClose, handleSaveGpa } = props;

	const [validationText, setValidationText] = useState(validation);
	const [validityClassName, setValidityClassName] = useState('text-muted');
	const [isValid, setIsValid] = useState(0);

	const [name, handleChange, resetName] = useInputState('');

	const handleNameChange = (event) => {
		handleChange(event);
		checkForValidity(event.target.value);
	};

	const checkForValidity = (value) => {
		if (value.trim().length > 0) {
			if (isDuplicateName(value)) {
				setValidationText('Name already exists. Try a different name...');
				setValidityClassName('text-danger');
				setIsValid(false);
			} else {
				setValidationText("You're good to save the results.");
				setValidityClassName('text-success');
				setIsValid(true);
			}
		} else {
			setValidationText('Field cannot be empty.');
			setValidityClassName('text-danger');
			setIsValid(false);
		}
	};

	const isDuplicateName = (name) => {
		const storedValues = window.localStorage.getItem(queryId);
		if (storedValues) {
			const valuesArr = JSON.parse(storedValues);
			const isUnique = valuesArr.every(
				(value) => value.title.toLowerCase() !== name.toLowerCase().trim()
			);
			return !isUnique;
		} else {
			return false;
		}
	};

	const saveGpa = () => {
		handleSaveGpa(name);
		resetName();
	};

	return (
		<Modal centered show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Enter a name</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder={placeholder}
						value={name}
						onChange={handleNameChange}
					/>
					<Form.Text className={validityClassName}>{validationText}</Form.Text>
				</Form.Group>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
				<Button variant='primary' onClick={saveGpa} disabled={!isValid}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default EnterNameModal;
