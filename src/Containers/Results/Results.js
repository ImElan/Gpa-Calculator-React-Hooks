import React, { useState, useEffect } from 'react';
import CardsContainer from '../../Components/Results/CardsContainer';
import NotificationToast from '../../Components/UI/NotificationToast';

import { v4 as uuidv4 } from 'uuid';

import { useModalState } from '../../hooks/useModalState';

import { Container } from 'react-bootstrap';

function Results(props) {
	const { data, queryId } = props;

	const [results, setResults] = useState(data);
	const [notificationTitle, setNotificationTitle] = useState('');

	const [showToast, openToast, closeToast] = useModalState(false);

	useEffect(() => {
		setResults(data);
	}, [data]);

	const editElement = (id, newVal) => {
		const updatedResults = results.map((result) => {
			if (result.id === id) {
				return {
					...result,
					credits: newVal.credits,
					title: newVal.title,
					result: newVal.result,
				};
			} else {
				return result;
			}
		});
		// update in local storage
		window.localStorage.setItem(queryId, JSON.stringify(updatedResults));
		// update in state
		setResults(updatedResults);
	};

	const deleteElement = (id) => {
		const updatedResults = results.filter((result) => result.id !== id);
		window.localStorage.setItem(queryId, JSON.stringify(updatedResults));
		setResults(updatedResults);
	};

	const addToCgpaCalculation = (id) => {
		const item = results.find((result) => result.id === id);
		const selectedItem = {
			credit: item.credits,
			gpa: item.result,
			id: uuidv4(),
		};
		const storedGpaForCgpaCalculation = window.localStorage.getItem('cgpaCalc');
		if (!storedGpaForCgpaCalculation) {
			window.localStorage.setItem('cgpaCalc', JSON.stringify([selectedItem]));
		} else {
			const updatedArr = JSON.parse(storedGpaForCgpaCalculation);
			updatedArr.push(selectedItem);
			window.localStorage.setItem('cgpaCalc', JSON.stringify(updatedArr));
		}
		setNotificationTitle(item.title);
		openToast();
	};

	return (
		<>
			<Container>
				<CardsContainer
					data={results}
					queryId={queryId}
					editElement={editElement}
					deleteElement={deleteElement}
					addToCgpaCalculation={addToCgpaCalculation}
				/>
			</Container>
			<NotificationToast
				show={showToast}
				message={`${notificationTitle} result added to CGPA calculation`}
				closeToast={closeToast}
			/>
		</>
	);
}

export default Results;
