import React from 'react';

import { InputGroup,Form,Col } from 'react-bootstrap';

function CreditGradeElement() {
      return(
            <Col md={8} className='mb-3'>
                  <InputGroup>
                        <InputGroup.Prepend>
                              <InputGroup.Text>Credits</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                              as='select'
                              className='mr-4'
                        >
                              <option>5</option>
                              <option>4</option>
                              <option>3</option>
                              <option>2</option>
                              <option>1</option>
                        </Form.Control>
                        <InputGroup.Prepend>
                              <InputGroup.Text>Grades</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                              as='select'
                        >
                              <option>O</option>
                              <option>A+</option>
                              <option>A</option>
                              <option>B+</option>
                              <option>B</option>
                        </Form.Control>
                  </InputGroup>
            </Col>
      )
}

export default CreditGradeElement;