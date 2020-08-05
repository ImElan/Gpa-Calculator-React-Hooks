import React from 'react';
import EditResultModal from '../UI/EditResultModal';
import { useModalState } from '../../hooks/useModalState';

import { Card, Button, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

function GpaCgpaCard(props) {
	const {
		id,
		title,
		credits,
		result,
		resultLabel,
		resultPlaceholder,
		editElement,
		deleteElement,
		addToCgpaCalculation,
	} = props;

	const [showEditModal, openEditModal, closeEditModal] = useModalState(false);

	const handleEdit = () => {
		openEditModal();
	};

	const handleDelete = () => {
		deleteElement(id);
	};

	const handleAddToCgpa = () => {
		addToCgpaCalculation(id);
	};

	return (
		<>
			<Col sm={12} className='my-3'>
				<Card>
					<Card.Body>
						<Card.Title>Name : {title}</Card.Title>
						<div className='d-flex mt-3'>
							<Card.Subtitle className='mb-2 mr-5 text-muted'>
								Total Credits : {credits}
							</Card.Subtitle>
							<Card.Subtitle className='mb-2 text-muted'>
								GPA : {result}
							</Card.Subtitle>
						</div>
						<div className='mt-2 d-flex flex-column align-items-start flex-sm-row'>
							<Button
								variant='warning'
								className='px-4 py-1 mb-2 mr-sm-3'
								onClick={handleEdit}
							>
								Edit
							</Button>
							<Button
								variant='danger'
								className='px-4 py-1 mb-2 mr-sm-3'
								onClick={handleDelete}
							>
								Delete
							</Button>
							<OverlayTrigger
								placement='bottom'
								overlay={
									<Tooltip className='tooltip__cgpaCalc'>
										You can use this button to add this
										result to CGPA calculation and have it
										<strong> pre-loaded</strong> when you go
										to CGPA calculation page.
									</Tooltip>
								}
							>
								<Button
									variant='info'
									className='px-4 py-1'
									onClick={handleAddToCgpa}
								>
									Add To CGPA Calculation
								</Button>
							</OverlayTrigger>
						</div>
					</Card.Body>
				</Card>
			</Col>
			<EditResultModal
				id={id}
				show={showEditModal}
				prevTitle={title}
				prevCredits={credits}
				prevResult={result}
				resultLabel={resultLabel}
				resultPlaceholder={resultPlaceholder}
				handleClose={closeEditModal}
				handleEdit={editElement}
			/>
		</>
	);
}

export default GpaCgpaCard;
