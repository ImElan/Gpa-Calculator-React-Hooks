import React, { useState } from 'react';

import { useInputState } from '../../hooks/useInputState';

import { Modal, Form, Button } from 'react-bootstrap';

function EditResultModal(props) {
	const {
		id,
		show,
		queryId,
		validation,
		prevTitle,
		prevCredits,
		prevResult,
		resultLabel,
		resultPlaceholder,
		handleClose,
		handleEdit,
	} = props;

	const [validationText, setValidationText] = useState(validation);
	const [validityClassName, setValidityClassName] = useState('text-muted');
	const [isValid, setIsValid] = useState(0);

	const [title, handleTitleChange, resetTitle] = useInputState(prevTitle);
	const [credits, handleCreditsChange, resetCredits] = useInputState(prevCredits);
	const [result, handleResultChange, resetResult] = useInputState(prevResult);

	const editHandler = () => {
		const newData = {
			title,
			credits,
			result,
		};
		handleEdit(id, newData);
		handleClose();
	};

	const closeHandler = () => {
		/* 
                  ---------- To handle this case ----------
                        1. changing the input field in edit modal and closing the modal instead of saving it      
            */
		handleTitleChange({ target: { value: prevTitle } });
		handleCreditsChange({ target: { value: prevCredits } });
		handleResultChange({ target: { value: prevResult } });
		handleClose();
	};

	const titleChangeHandler = (event) => {
		handleTitleChange(event);
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

	return (
		<Modal centered show={show} onHide={closeHandler}>
			<Modal.Header closeButton>
				<Modal.Title>Enter a name</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter New Name : '
						value={title}
						onChange={titleChangeHandler}
					/>
					<Form.Text className={validityClassName}>{validationText}</Form.Text>
				</Form.Group>
				<Form.Group>
					<Form.Label>Credits</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter New Credits : '
						value={credits}
						onChange={handleCreditsChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>{resultLabel}</Form.Label>
					<Form.Control
						type='text'
						placeholder={resultPlaceholder}
						value={result}
						onChange={handleResultChange}
					/>
				</Form.Group>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={closeHandler}>
					Close
				</Button>
				<Button variant='primary' onClick={editHandler}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default EditResultModal;
