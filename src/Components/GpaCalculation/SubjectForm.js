import React,{forwardRef,useImperativeHandle} from 'react';

// Custom Hooks
import { useInputState } from '../../hooks/useInputState';

// BootStrap
import { InputGroup, Form, Row, Col  } from 'react-bootstrap';

function SubjectForm(props,ref) {

      const [ input,handleChange,resetInput ] = useInputState('0');
      const { totalSubjects,handleNumSubjectsChange,handleCreditGradeArrayChange } = props;

      const renderOptions = Array.from({length:totalSubjects+1}).map( (_,index) => (
            <option key={index}>{index}</option>
      )) 

      const handleNumberOfSubjectChange = (event) => {
            const newNumberOfSubject = +event.target.value;
            handleChange(event);
            handleCreditGradeArrayChange(newNumberOfSubject);
            handleNumSubjectsChange(newNumberOfSubject);
      }

      useImperativeHandle(ref,() => (
            {
                  resetInput
            }
      ))

      return(
            <Row className='justify-content-center'>
                  <Col md={6}>
                        <InputGroup>
                              <InputGroup.Prepend>
                                    <InputGroup.Text id='basic-addon1'>Enter Number Of Subjects</InputGroup.Text>
                              </InputGroup.Prepend>
                              <Form.Control 
                                    as='select' 
                                    value={input}
                                    onChange={handleNumberOfSubjectChange}
                              >
                                    {renderOptions}
                              </Form.Control> 
                        </InputGroup>
                  </Col>
            </Row>
      )
}

export default forwardRef(SubjectForm);