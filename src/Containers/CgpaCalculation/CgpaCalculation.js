import React,{ useRef, useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';

import { Container } from 'react-bootstrap';
import CreditGpaForm from '../../Components/CgpaCalculation/CreditGpaForm';

function CgpaCalculation() {
      const [ numSemesters,setNumSemesters ] = useState(0);

      const subjectForm = useRef(null);

      const handleNumSemesterChange = (newNumberOfSemesters) => {
            setNumSemesters(newNumberOfSemesters);
      }

      const handleGradeGpaArrayChange = () => {
            
      }

      return(
            <>
                  <Container className='mt-5'>
                        <SubjectForm 
                              ref={subjectForm}
                              tag='Semesters'
                              totalSubjects={8} 
                              handleInputChange={handleNumSemesterChange}
                              handleArrayChange={handleGradeGpaArrayChange}
                        />
                        <CreditGpaForm />
                  </Container>
            </>
      )
}

export default CgpaCalculation;