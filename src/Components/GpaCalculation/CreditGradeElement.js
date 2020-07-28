import React from 'react';

import { useInputState } from '../../hooks/useInputState';

import { InputGroup,Form,Col } from 'react-bootstrap';

const renderCreditOptions = Array.from({length:5}).map((_,index) => (
      <option key={index}>{index+1}</option>
))

function CreditGradeElement(props) {
      const { grades,creditGrade ,changeCredit,changeGrade}  = props;
      const [credit,handleCreditChange,resetCredit] = useInputState(creditGrade.credit);
      const [grade,handleGradeChange,resetGrade] = useInputState(creditGrade.grade);

      
      const renderGradesOption = grades.map( (grade,index) => (
            <option key={index}>{grade}</option>
      ))

      const creditChangeHandler = (event) => {
            handleCreditChange(event);
            changeCredit(creditGrade.id,event.target.value);
      }

      const gradeChangeHandler = (event) => {
            handleGradeChange(event);
            changeGrade(creditGrade.id,event.target.value);
      }

      return(
            <Col md={8} className='mb-3'>
                  <InputGroup>
                        <InputGroup.Prepend>
                              <InputGroup.Text>Credits</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                              as='select'
                              className='mr-4'
                              value={credit}
                              onChange={creditChangeHandler}
                        >
                              {renderCreditOptions}
                        </Form.Control>
                        <InputGroup.Prepend>
                              <InputGroup.Text>Grades</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                              as='select'
                              value={grade}
                              onChange={gradeChangeHandler}
                        >
                              {renderGradesOption}
                        </Form.Control>
                  </InputGroup>
            </Col>
      )
}

export default CreditGradeElement;