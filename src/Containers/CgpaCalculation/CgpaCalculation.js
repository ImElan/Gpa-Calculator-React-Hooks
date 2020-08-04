import React, { useRef, useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGpaForm from '../../Components/CgpaCalculation/CreditGpaForm';
import CalculateButton from '../../Components/UI/CalculateButton';
import ResultModal from '../../Components/UI/ResultModal';
import NotificationToast from '../../Components/UI/NotificationToast';
import EnterNameModal from '../../Components/UI/EnterNameModal';

import { useModalState } from '../../hooks/useModalState';

import { v4 as uuidv4 } from 'uuid';

import { Container } from 'react-bootstrap';

function CgpaCalculation() {
	const [numSemesters, setNumSemesters] = useState(0);
	const [creditGpaArray, setCreditGpaArray] = useState([]);
	const [credit, setCredit] = useState('');
	const [cgpa, setCgpa] = useState('');

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
		closeNameModal();
		setNumSemesters(0);
		subjectForm.current.resetInput();
		setCreditGpaArray([]);
		openToast();
	};

	return (
		<>
			<Container className='mt-5'>
				<SubjectForm
					ref={subjectForm}
					tag='Semesters'
					totalSubjects={8}
					handleInputChange={handleNumSemesterChange}
					handleArrayChange={handleGradeGpaArrayChange}
				/>
				{numSemesters > 0 && (
					<CreditGpaForm
						creditGpaArray={creditGpaArray}
						changeCredit={handleCreditChange}
						changeGpa={handleGpaChange}
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
				message='CGpa Saved'
				closeToast={closeToast}
			/>
		</>
	);
}

export default CgpaCalculation;

/* 
      TODO:
            1. add edit remove delete functionality
            2. add configure functionality to set the grade and corresponding gradepoints.
            3. add to cgpa calculation
*/
