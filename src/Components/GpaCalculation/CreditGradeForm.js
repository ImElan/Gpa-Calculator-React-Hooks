import React from 'react';
import CreditGradeElement from './CreditGradeElement';

import { Row } from 'react-bootstrap';

function CreditGradeForm(props) {
      const { numSubjects,grades } = props;
      return(
            <Row className='justify-content-center mt-5'>
                  {Array.from({length:numSubjects}).map( (_,index) => (
                        <CreditGradeElement key={index} grades={grades} />
                  ))}
            </Row>
      )
}

export default CreditGradeForm;