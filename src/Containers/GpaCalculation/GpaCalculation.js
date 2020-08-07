import React, { useState, useRef } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGradeForm from '../../Components/GpaCalculation/CreditGradeForm';
import ResultModal from '../../Components/UI/ResultModal';
import EnterNameModal from '../../Components/UI/EnterNameModal';
import NotificationToast from '../../Components/UI/NotificationToast';
import CalculateButton from '../../Components/UI/CalculateButton';
import ConfigureModal from '../../Components/UI/CreditGradeConfiguration/ConfigureModal';

import { v4 as uuidv4 } from 'uuid';

import { useModalState } from '../../hooks/useModalState';

import { defaultCreditGrade } from '../../Data/GpaCalculation';

import { Container } from 'react-bootstrap';

function GpaCalculation(props) {
	const { config } = props;

	const [numSubjects, setNumSubjects] = useState(0);
	const [creditGradeArray, setCreditGradeArray] = useState([]);
	const [gpa, setGpa] = useState('');
	const [credit, setCredit] = useState('');
	const [resultName, setResultName] = useState('');

	const [showGpaModal, openGpaModal, closeGpaModal] = useModalState(false);
	const [showNameModal, openNameModal, closeNameModal] = useModalState(false);
	const [showToast, openToast, closeToast] = useModalState(false);

	const [creditGradeFormat, setCreditGradeFormat] = useState(config ? JSON.parse(config) : {});
	const [showConfigureModal, openConfigureModal, closeConfigureModal] = useModalState(
		config ? false : true
	);

	const subjectForm = useRef(null);

	const grades = Object.keys(creditGradeFormat);

	const handleNumSubjectsChange = (newNum) => {
		setNumSubjects(newNum);
	};

	const handleCreditGradeArrayChange = (newNum) => {
		let updatedArray = [...creditGradeArray];

		const keysArr = Object.keys(creditGradeFormat);
		console.log(keysArr);
		let middleIndex = Math.floor(keysArr.length / 2);
		const defaultGrade = keysArr[middleIndex];

		if (newNum > numSubjects) {
			for (let i = 0; i < newNum - numSubjects; i++) {
				updatedArray.push({
					credit: 3,
					grade: defaultGrade,
					id: uuidv4(),
				});
			}
		} else if (numSubjects > newNum) {
			updatedArray = updatedArray.slice(0, newNum);
		}
		setCreditGradeArray(updatedArray);
	};

	const handleCreditChange = (id, newCredit) => {
		const updatedArray = creditGradeArray.map((creditGrade) => {
			if (creditGrade.id !== id) {
				return creditGrade;
			} else {
				return {
					...creditGrade,
					credit: +newCredit,
				};
			}
		});
		setCreditGradeArray(updatedArray);
	};

	const handleGradeChange = (id, newGrade) => {
		const updatedArray = creditGradeArray.map((creditGrade) => {
			if (creditGrade.id !== id) {
				return creditGrade;
			} else {
				return {
					...creditGrade,
					grade: newGrade,
				};
			}
		});
		setCreditGradeArray(updatedArray);
	};

	const handleCalculate = () => {
		// [{credit:3,grade:'A+'},{credit:2,grade:'B+'}]
		let numerator = 0;
		let denominator = 0;
		creditGradeArray.forEach((creditGrade) => {
			let gradePoint = creditGradeFormat[creditGrade.grade];
			numerator += gradePoint * creditGrade.credit;
			denominator += creditGrade.credit;
		});
		const gpa = (numerator / denominator).toFixed(3);
		setGpa(gpa);
		setCredit(denominator);
		openGpaModal();
	};

	const saveGpa = (name) => {
		// console.log('Saving Feature Goes here...')
		/*  
                  1. check the local storage if it already has a gpa array.
                        ---> if so get it parse it and push the new gpa to it and store it back.
                        ---> if not make a new array and push the new gpa and store it.
            */
		const newGpa = {
			result: gpa,
			credits: credit,
			title: name,
			id: uuidv4(),
		};
		const storedGpa = window.localStorage.getItem('gpa');
		if (storedGpa) {
			const gpaArray = JSON.parse(storedGpa);
			gpaArray.push(newGpa);
			window.localStorage.setItem('gpa', JSON.stringify(gpaArray));
		} else {
			window.localStorage.setItem('gpa', JSON.stringify([newGpa]));
		}
		setResultName(name);
		closeNameModal();
		setNumSubjects(0);
		subjectForm.current.resetInput();
		setCreditGradeArray([]);
		openToast();
	};

	const deleteCreditGradeElement = (id) => {
		const updatedArray = creditGradeArray.filter((creditGrade) => creditGrade.id !== id);
		setCreditGradeArray(updatedArray);
		setNumSubjects(numSubjects - 1);
		subjectForm.current.handleChange({ target: { value: numSubjects - 1 } });
	};

	const saveConfiguration = (newConfig) => {
		// expecting an array of object
		// change it object format
		let newFormat = {};
		newConfig.forEach((element) => {
			newFormat[element.grade] = element.gradePoint;
		});
		setCreditGradeFormat(newFormat);
		window.localStorage.setItem('config', JSON.stringify(newFormat));
		closeConfigureModal();
	};

	const useDefaultHandler = () => {
		setCreditGradeFormat(defaultCreditGrade);
		window.localStorage.setItem('config', JSON.stringify(defaultCreditGrade));
		closeConfigureModal();
	};

	return (
		<>
			<Container className='mt-5'>
				<SubjectForm
					num={numSubjects}
					ref={subjectForm}
					tag='Subjects'
					totalSubjects={15}
					handleInputChange={handleNumSubjectsChange}
					handleArrayChange={handleCreditGradeArrayChange}
				/>
				{numSubjects > 0 && (
					<CreditGradeForm
						grades={grades}
						creditGradeArray={creditGradeArray}
						handleCreditChange={handleCreditChange}
						handleGradeChange={handleGradeChange}
						deleteCreditGradeElement={deleteCreditGradeElement}
					/>
				)}
				{numSubjects > 0 && <CalculateButton handleCalculate={handleCalculate} />}
			</Container>
			<ResultModal
				show={showGpaModal}
				credit={credit}
				result={gpa}
				message='GPA'
				handleClose={closeGpaModal}
				handleContinue={openNameModal}
			/>
			<EnterNameModal
				queryId='gpa'
				placeholder='Example : Semester 1'
				validation='Give it a meaningful name so that it will be easier for you to understand it later'
				show={showNameModal}
				handleClose={closeNameModal}
				handleSaveGpa={saveGpa}
			/>
			<NotificationToast
				show={showToast}
				message={`${resultName} GPA Saved`}
				closeToast={closeToast}
			/>
			<ConfigureModal
				numGrades={5}
				show={showConfigureModal}
				closeHandler={closeConfigureModal}
				saveHandler={saveConfiguration}
				useDefaultHandler={useDefaultHandler}
			/>
		</>
	);
}

export default GpaCalculation;
