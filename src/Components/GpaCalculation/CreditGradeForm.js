import React from 'react';
import CreditGradeElement from './CreditGradeElement';

import { Row } from 'react-bootstrap';

function CreditGradeForm(props) {
	const {
		grades,
		creditGradeArray,
		handleCreditChange,
		handleGradeChange,
		deleteCreditGradeElement,
	} = props;

	return (
		<Row className='justify-content-center mt-5'>
			{creditGradeArray.map((creditGrade) => (
				<CreditGradeElement
					key={creditGrade.id}
					id={creditGrade.id}
					creditGrade={creditGrade}
					grades={grades}
					changeCredit={handleCreditChange}
					changeGrade={handleGradeChange}
					deleteCreditGradeElement={deleteCreditGradeElement}
				/>
			))}
		</Row>
	);
}

export default CreditGradeForm;
