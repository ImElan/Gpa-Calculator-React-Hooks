import React,{ useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGradeForm from '../../Components/GpaCalculation/CreditGradeForm';

import { Container } from 'react-bootstrap';

function GpaCalculation() {
      const [ numSubjects,setNumSubjects ] = useState(0);
      return(
            <Container className='mt-5'>
                  <SubjectForm numOfSubjects={15} setNumSubjects={setNumSubjects} />
                  <CreditGradeForm numSubjects={numSubjects} />
            </Container>
      )
}

export default GpaCalculation;