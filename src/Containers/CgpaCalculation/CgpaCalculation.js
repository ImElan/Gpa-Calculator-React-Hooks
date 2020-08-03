import React,{ useRef, useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGpaForm from '../../Components/CgpaCalculation/CreditGpaForm';
import CalculateButton from '../../Components/UI/CalculateButton';

import { v4 as uuidv4 } from 'uuid';

import { Container } from 'react-bootstrap';

function CgpaCalculation() {
      const [ numSemesters,setNumSemesters ] = useState(0);
      const [ creditGpaArray,setCreditGpaArray ] = useState([]);
      const [ credit,setCredit ] = useState('');
      const [ cgpa,setCgpa ] = useState('');

      const subjectForm = useRef(null);

      const handleNumSemesterChange = (newNumberOfSemesters) => {
            setNumSemesters(newNumberOfSemesters);
      }

      const handleGradeGpaArrayChange = (newNum) => {
            let updatedArray = [...creditGpaArray];
            if(newNum > numSemesters) {
                  for(let i=0;i<newNum - numSemesters;i++) {
                        updatedArray.push({
                              credit:'',
                              gpa:'',
                              id:uuidv4()
                        })
                  }
            } else {
                  updatedArray = updatedArray.slice(0,newNum);
            }
            setCreditGpaArray(updatedArray);
      }

      const handleCreditChange = (id,newCredit) => {
            const updatedArray = creditGpaArray.map( creditGpa => {
                  if(creditGpa.id === id) {
                        return {
                              ...creditGpa,
                              credit:newCredit
                        }
                  } else {
                        return creditGpa;
                  }
            })
            setCreditGpaArray(updatedArray);
      }

      const handleGpaChange = (id,newGpa) => {
            const updatedArray = creditGpaArray.map( creditGpa => {
                  if(creditGpa.id === id) {
                        return {
                              ...creditGpa,
                              gpa:newGpa
                        }
                  } else {
                        return creditGpa;
                  }
            })
            setCreditGpaArray(updatedArray);
      }

      const calculateCgpa = () => {
            let numerator = 0;
            let denominator = 0;
            creditGpaArray.forEach( creditGpa => {
                  numerator += (creditGpa.credit * creditGpa.gpa);
                  denominator += creditGpa.credit;
            });
            const cgpa = (numerator/denominator).toFixed(3);
            setCredit(denominator);
            setCgpa(cgpa);
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
                        {numSemesters > 0 && 
                        <CreditGpaForm 
                              creditGpaArray={creditGpaArray}
                              changeCredit={handleCreditChange}
                              changeGpa={handleGpaChange}
                        />}
                        {numSemesters > 0 && 
                        <CalculateButton 
                              handleCalculate={calculateCgpa}
                        />}
                  </Container>
            </>
      )
}

export default CgpaCalculation;