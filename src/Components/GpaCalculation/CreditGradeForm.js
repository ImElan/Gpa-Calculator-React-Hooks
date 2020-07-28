import React from 'react';
import CreditGradeElement from './CreditGradeElement';

import { Row } from 'react-bootstrap';

function CreditGradeForm(props) {
      const { grades,creditGradeArray } = props;
      return(
            <Row className='justify-content-center mt-5'>
                  { creditGradeArray.map( (creditGrade,index) => (
                        <CreditGradeElement 
                              key={index} 
                              creditGrade={creditGrade} 
                              grades={grades}
                        />
                  )) }
            </Row>
      )
}

export default CreditGradeForm;