import React from 'react';
import CreditGpaElement from './CreditGpaElement';
import { Row } from 'react-bootstrap';

function CreditGpaForm(props) {
	const { creditGpaArray, changeCredit, changeGpa, deleteCreditGpaElement } = props;

	return (
		<Row className='justify-content-center mt-5'>
			{creditGpaArray.map((creditGpa) => (
				<CreditGpaElement
					key={creditGpa.id}
					id={creditGpa.id}
					creditGpa={creditGpa}
					changeCredit={changeCredit}
					changeGpa={changeGpa}
					deleteCreditGpaElement={deleteCreditGpaElement}
				/>
			))}
		</Row>
	);
}

export default CreditGpaForm;
