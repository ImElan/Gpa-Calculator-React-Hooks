import React from 'react';

import { InputGroup,Form,Col } from 'react-bootstrap';

const renderCreditOptions = Array.from({length:5}).map((_,index) => (
      <option>{index+1}</option>
))

function CreditGradeElement(props) {
      const { grades,creditGrade }  = props;

      const renderGradesOption = grades.map( (grade,index) => (
            <option key={index}>{grade}</option>
      ))

      return(
            <Col md={8} className='mb-3'>
                  <InputGroup>
                        <InputGroup.Prepend>
                              <InputGroup.Text>Credits</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                              as='select'
                              className='mr-4'
                              value={creditGrade.credit}
                        >
                              {renderCreditOptions}
                        </Form.Control>
                        <InputGroup.Prepend>
                              <InputGroup.Text>Grades</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                              as='select'
                              value={creditGrade.grade}
                        >
                              {renderGradesOption}
                        </Form.Control>
                  </InputGroup>
            </Col>
      )
}

export default CreditGradeElement;