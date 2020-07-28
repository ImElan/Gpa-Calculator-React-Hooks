import React,{ useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGradeForm from '../../Components/GpaCalculation/CreditGradeForm';

import { defaultCreditGrade } from '../../Data/GpaCalculation';

import { v4 as uuidv4 } from 'uuid';

import { Container } from 'react-bootstrap';

function GpaCalculation() {

      const [ numSubjects,setNumSubjects ] = useState(0);
      const [ creditGradeFormat,setCreditGradeFormat ] = useState(defaultCreditGrade);
      const [ creditGradeArray,setCreditGradeArray ] = useState([]);

      const grades = Object.keys(creditGradeFormat);

      const handleNumSubjectsChange = (newNum) => {
            setNumSubjects(newNum);
      }

      const handleCreditGradeArrayChange = (newNum) => { 
            let updatedArray = [...creditGradeArray];
            if(newNum > numSubjects) {
                  for(let i=0;i<newNum-numSubjects;i++) {
                        updatedArray.push({credit:3,grade:'A',id:uuidv4()});
                  }
            } else if(numSubjects > newNum) {
                  updatedArray = updatedArray.slice(0,newNum);
            }
            setCreditGradeArray(updatedArray);
      }

      const handleGradeChange = () => {

      }

      const handleCreditChange = () => {

      }

      return(
            <Container className='mt-5'>
                  <SubjectForm 
                        totalSubjects={15} 
                        creditGradeArray={creditGradeArray}
                        handleNumSubjectsChange={handleNumSubjectsChange}
                        handleCreditGradeArrayChange={handleCreditGradeArrayChange}
                  />
                  <CreditGradeForm 
                        grades={grades}
                        creditGradeArray={creditGradeArray}
                  />
            </Container>
      )
}

export default GpaCalculation;