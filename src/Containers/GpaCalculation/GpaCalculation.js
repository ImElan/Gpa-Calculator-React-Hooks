import React,{ useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGradeForm from '../../Components/GpaCalculation/CreditGradeForm';

import { defaultCreditGrade } from '../../Data/GpaCalculation';

import { Container } from 'react-bootstrap';

function GpaCalculation() {

      const [ numSubjects,setNumSubjects ] = useState(0);
      const [ creditGradeFormat,setCreditGradeFormat ] = useState(defaultCreditGrade);
      const [ creditGradeArray,setCreditGradeArray ] = useState([]);

      const grades = Object.keys(creditGradeFormat);

      return(
            <Container className='mt-5'>
                  <SubjectForm numOfSubjects={15} setNumSubjects={setNumSubjects} />
                  <CreditGradeForm numSubjects={numSubjects} grades={grades}/>
            </Container>
      )
}

export default GpaCalculation;