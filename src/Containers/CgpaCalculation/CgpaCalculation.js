import React, { useRef, useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGpaForm from '../../Components/CgpaCalculation/CreditGpaForm';
import CalculateButton from '../../Components/UI/CalculateButton';
import ResultModal from '../../Components/UI/ResultModal';
import NotificationToast from '../../Components/UI/NotificationToast';
import EnterNameModal from '../../Components/UI/EnterNameModal';

import { useModalState } from '../../hooks/useModalState';

import { v4 as uuidv4 } from 'uuid';

import { Container, Alert, Button } from 'react-bootstrap';

function CgpaCalculation() {
	let storedGpasForCalculation;
	if (typeof window !== 'undefined') {
		storedGpasForCalculation = window.localStorage.getItem('cgpaCalc');
	}
	const defaultVal = storedGpasForCalculation ? JSON.parse(storedGpasForCalculation) : [];
	const defaultSemesters = storedGpasForCalculation
		? JSON.parse(storedGpasForCalculation).length
		: 0;

	const [showAlert, setShowAlert] = useState(storedGpasForCalculation ? true : false);
	const [showValidationAlert, setShowValidationAlert] = useState(
		storedGpasForCalculation ? true : false
	);
	const [creditGpaArray, setCreditGpaArray] = useState(defaultVal);
	const [numSemesters, setNumSemesters] = useState(defaultSemesters);
	const [credit, setCredit] = useState('');
	const [cgpa, setCgpa] = useState('');
	const [resultName, setResultName] = useState('');

	const [showCgpaModal, openCgpaModal, closeCgpaModal] = useModalState(false);
	const [showNameModal, openNameModal, closeNameModal] = useModalState(false);
	const [showToast, openToast, closeToast] = useModalState(false);

	const subjectForm = useRef(null);

	const handleNumSemesterChange = (newNumberOfSemesters) => {
		setNumSemesters(newNumberOfSemesters);
	};

	const handleGradeGpaArrayChange = (newNum) => {
		let updatedArray = [...creditGpaArray];
		if (newNum > numSemesters) {
			for (let i = 0; i < newNum - numSemesters; i++) {
				updatedArray.push({
					credit: '',
					gpa: '',
					id: uuidv4(),
				});
			}
		} else {
			updatedArray = updatedArray.slice(0, newNum);
		}
		setCreditGpaArray(updatedArray);
	};

	const handleCreditChange = (id, newCredit) => {
		const updatedArray = creditGpaArray.map((creditGpa) => {
			if (creditGpa.id === id) {
				return {
					...creditGpa,
					credit: newCredit,
				};
			} else {
				return creditGpa;
			}
		});
		setCreditGpaArray(updatedArray);
	};

	const handleGpaChange = (id, newGpa) => {
		const updatedArray = creditGpaArray.map((creditGpa) => {
			if (creditGpa.id === id) {
				return {
					...creditGpa,
					gpa: newGpa,
				};
			} else {
				return creditGpa;
			}
		});
		setCreditGpaArray(updatedArray);
	};

	const calculateCgpa = () => {
		/*    TODO:
                  ---------  validate before calculating it ---------
                        ---> check if all the fields are entered
                              ---> if yes calculate
                              ---> else show a alert. 

            */
		const isValid = creditGpaArray.every(
			(creditGpa) => !isFieldEmpty(creditGpa.credit) && !isFieldEmpty(creditGpa.gpa)
		);
		if (isValid) {
			let numerator = 0;
			let denominator = 0;
			creditGpaArray.forEach((creditGpa) => {
				numerator += creditGpa.credit * creditGpa.gpa;
				denominator += creditGpa.credit;
			});
			const cgpa = (numerator / denominator).toFixed(3);
			setCredit(denominator);
			setCgpa(cgpa);
			openCgpaModal();
		} else {
			setShowValidationAlert(true);
		}
	};

	const isFieldEmpty = (value) => {
		return value.length === 0 || value === 0;
	};

	const saveCgpa = (name) => {
		const newCgpa = {
			result: cgpa,
			credits: credit,
			title: name,
			id: uuidv4(),
		};
		const storedCgpa = window.localStorage.getItem('cgpa');
		if (storedCgpa) {
			const cgpaArray = JSON.parse(storedCgpa);
			cgpaArray.push(newCgpa);
			window.localStorage.setItem('cgpa', JSON.stringify(cgpaArray));
		} else {
			window.localStorage.setItem('cgpa', JSON.stringify([newCgpa]));
		}
		setResultName(name);
		closeNameModal();
		setNumSemesters(0);
		clearValues();
		subjectForm.current.resetInput();
		setCreditGpaArray([]);
		openToast();
	};

	// clears the values which was added to local storage by add to cgpa calculation button.
	const clearValues = () => {
		const storedGpasForCalculation = window.localStorage.getItem('cgpaCalc');
		if (storedGpasForCalculation) {
			window.localStorage.removeItem('cgpaCalc');
		}
		setShowAlert(false);
		subjectForm.current.resetInput();
		setNumSemesters(0);
		setCreditGpaArray([]);
	};

	const deleteCreditGpaElement = (id) => {
		const updatedArray = creditGpaArray.filter((creditGpa) => creditGpa.id !== id);
		setCreditGpaArray(updatedArray);
		setNumSemesters(numSemesters - 1);
		subjectForm.current.handleChange({ target: { value: numSemesters - 1 } });
	};

	return (
		<>
			<Container className='mt-5'>
				{showAlert && (
					<Alert
						variant='primary'
						onClose={() => setShowAlert(false)}
						className='mb-5'
						dismissible
					>
						<h5>
							You've added GPA's to the CGPA calculation from stored
							Values.
						</h5>
						<hr />
						<p className='mb-0'>
							If you don't want these values clear it using the button
							below
						</p>
						<div className='d-flex justify-content-end'>
							<Button variant='outline-primary' onClick={clearValues}>
								Clear Values
							</Button>
						</div>
					</Alert>
				)}
				<SubjectForm
					ref={subjectForm}
					num={numSemesters}
					tag='Semesters'
					totalSubjects={8}
					handleInputChange={handleNumSemesterChange}
					handleArrayChange={handleGradeGpaArrayChange}
				/>
				{showValidationAlert && (
					<Alert
						variant='danger'
						onClose={() => setShowValidationAlert(false)}
						className='mt-5'
						dismissible
					>
						<h5>Fields can't be empty.</h5>
					</Alert>
				)}
				{numSemesters > 0 && (
					<CreditGpaForm
						creditGpaArray={creditGpaArray}
						changeCredit={handleCreditChange}
						changeGpa={handleGpaChange}
						deleteCreditGpaElement={deleteCreditGpaElement}
					/>
				)}
				{numSemesters > 0 && <CalculateButton handleCalculate={calculateCgpa} />}
			</Container>
			<ResultModal
				show={showCgpaModal}
				credit={credit}
				result={cgpa}
				message='CGPA'
				handleClose={closeCgpaModal}
				handleContinue={openNameModal}
			/>
			<EnterNameModal
				placeholder='Example : Upto Semester 3'
				show={showNameModal}
				handleClose={closeNameModal}
				handleSaveGpa={saveCgpa}
			/>
			<NotificationToast
				show={showToast}
				message={`${resultName} CGPA Saved`}
				closeToast={closeToast}
			/>
		</>
	);
}

export default CgpaCalculation;

/* 
      TODO:
            ---> Add configure functionality to set the grade and corresponding gradepoints.
            ---> Check for duplicate name before storing it in local storage.
*/
