import React,{ useState,useRef } from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';
import CreditGradeForm from '../../Components/GpaCalculation/CreditGradeForm';
import ResultModal from '../../Components/UI/ResultModal';

import { useModalState } from '../../hooks/useModalState';

import { defaultCreditGrade } from '../../Data/GpaCalculation';

import { v4 as uuidv4 } from 'uuid';
import { Container,Button,Row, Col } from 'react-bootstrap';
import EnterNameModal from '../../Components/UI/EnterNameModal';
import NotificationToast from '../../Components/UI/NotificationToast';

function GpaCalculation() {
      const [ numSubjects,setNumSubjects ] = useState(0);
      const [ creditGradeFormat,setCreditGradeFormat ] = useState(defaultCreditGrade);
      const [ creditGradeArray,setCreditGradeArray ] = useState([]);   
      const [ gpa,setGpa] = useState('');
      const [ credit,setCredit ] = useState('');
      
      const [ showGpaModal,openGpaModal,closeGpaModal ] = useModalState(false);
      const [ showNameModal,openNameModal,closeNameModal ] = useModalState(false);
      const [ showToast,openToast,closeToast] = useModalState(false);
      
      const subjectForm = useRef(null);
      
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
            setGpa(gpa);
            setCredit(denominator);
            openGpaModal();
      }

      const saveGpa = (name) => {
            // console.log('Saving Feature Goes here...')
            /*  
                  1. check the local storage if it already has a gpa array.
                        ---> if so get it parse it and push the new gpa to it and store it back.
                        ---> if not make a new array and push the new gpa and store it.
            */
            const newGpa = {
                  result: gpa,
                  credits: credit,
                  title:name,
                  id:uuidv4()
            }
            const storedGpa = window.localStorage.getItem('gpa');
            if(storedGpa) {
                  const gpaArray = JSON.parse(storedGpa);
                  gpaArray.push(newGpa);
                  window.localStorage.setItem('gpa',JSON.stringify(gpaArray));
            } else {
                  window.localStorage.setItem('gpa',JSON.stringify([newGpa]));
            }
            closeNameModal();
            setNumSubjects(0);
            subjectForm.current.resetInput();
            setCreditGradeArray([]);
            openToast();
      }

      return(
            <>
                  <Container className='mt-5'>
                        <SubjectForm 
                              ref={subjectForm}
                              totalSubjects={15} 
                              creditGradeArray={creditGradeArray}
                              handleNumSubjectsChange={handleNumSubjectsChange}
                              handleCreditGradeArrayChange={handleCreditGradeArrayChange}
                        />
                        {numSubjects > 0 && 
                        <CreditGradeForm 
                              grades={grades}
                              creditGradeArray={creditGradeArray}
                              handleCreditChange={handleCreditChange}
                              handleGradeChange={handleGradeChange}
                        />}
                        {numSubjects>0 && 
                        <Row className='justify-content-center mt-4'>
                              <Col md={4} className='d-flex justify-content-center mb-4'>
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
                        show={showGpaModal}
                        credit={credit}
                        gpa={gpa}
                        handleClose={closeGpaModal}
                        handleContinue={openNameModal}
                  />
                  <EnterNameModal 
                        show={showNameModal}
                        handleClose={closeNameModal}
                        handleSaveGpa={saveGpa}
                  />
                  <NotificationToast
                        show={showToast}
                        message='Gpa Saved'
                        closeToast={closeToast}
                  />
            </>     
      )
}

export default GpaCalculation;

/* 
      ==> TODO <==  (DONE)
      1.after saving gpa change number of subject to zero.
      2.also set the gpa credit elements to default.

      these thing has to do with reseting the forms.
*/