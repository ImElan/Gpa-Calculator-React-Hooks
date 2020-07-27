import React,{ useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';

import { Container } from 'react-bootstrap';

function GpaCalculation() {
      const [ numSubjects,setNumSubjects ] = useState(0);
      // const [creditAndGrades]
      return(
            <Container className='mt-5'>
                  <SubjectForm numOfSubjects={5} setNumSubjects={setNumSubjects} />
            </Container>
      )
}

export default GpaCalculation;