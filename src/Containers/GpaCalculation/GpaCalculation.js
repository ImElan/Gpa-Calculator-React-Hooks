import React,{ useState } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGradeForm from '../../Components/GpaCalculation/CreditGradeForm';
import ResultModal from '../../Components/UI/ResultModal';

import { useModalState } from '../../hooks/useModalState';

import { defaultCreditGrade } from '../../Data/GpaCalculation';

import { v4 as uuidv4 } from 'uuid';

import { Container,Button,Row, Col } from 'react-bootstrap';

function GpaCalculation() {

      const [ numSubjects,setNumSubjects ] = useState(0);
      const [ creditGradeFormat,setCreditGradeFormat ] = useState(defaultCreditGrade);
      const [ creditGradeArray,setCreditGradeArray ] = useState([]);   
      
      const [ show,openModal,closeModal ] = useModalState(false);

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

      const handleCreditChange = (id,newCredit) => {
            const updatedArray = creditGradeArray.map( (creditGrade) => {
                  if(creditGrade.id !== id) {
                        return creditGrade;
                  } else {
                        return {
                              ...creditGrade,
                              credit:+newCredit
                        }
                  }
            })
            setCreditGradeArray(updatedArray);
      }
      
      const handleGradeChange = (id,newGrade) => {
            const updatedArray = creditGradeArray.map( (creditGrade) => {
                  if(creditGrade.id !== id) {
                        return creditGrade;
                  } else {
                        return {
                              ...creditGrade,
                              grade:newGrade
                        }
                  }
            })
            setCreditGradeArray(updatedArray);
      }

      const handleCalculate = () => {
            // [{credit:3,grade:'A+'},{credit:2,grade:'B+'}]
            let numerator = 0;
            let denominator = 0;
            creditGradeArray.forEach( creditGrade => {
                  let gradePoint = creditGradeFormat[creditGrade.grade];
                  numerator += gradePoint * creditGrade.credit;
                  denominator += creditGrade.credit;
            })
            const gpa = (numerator/denominator).toFixed(3);
            console.log(gpa);
      }

      return(
            <>
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
                              handleCreditChange={handleCreditChange}
                              handleGradeChange={handleGradeChange}
                        />
                        {numSubjects>0 && <Row className='justify-content-center mt-4'>
                              <Col md={4} className='d-flex justify-content-center'>
                                    <Button 
                                          style={{
                                                width:'100%'
                                          }} 
                                          variant='primary' 
                                          className='text-center'
                                          onClick={handleCalculate}
                                    >
                                          Calculate
                                    </Button>
                              </Col>
                        </Row>}
                  </Container>
                  <ResultModal 
                        show={show}
                        handleClose={closeModal}
                  />
            </>     
      )
}

export default GpaCalculation;