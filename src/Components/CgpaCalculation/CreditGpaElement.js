import React from 'react';
import { Col,InputGroup, Form } from 'react-bootstrap';
import { useInputState } from '../../hooks/useInputState';

function CreditGpaElement(props) {
      const { creditGpa,changeCredit,changeGpa } = props;
      const [ credits,handleCreditsChange,resetCredits ] = useInputState(creditGpa.credit);
      const [ gpa,handleGpaChange,resetGpa ] = useInputState(creditGpa.gpa);

      const creditChangeHandler = (event) => {
            handleCreditsChange(event);
            changeCredit(creditGpa.id,+event.target.value);
      }
      
      const gpaChangeHandler = (event) => {
            handleGpaChange(event);
            changeGpa(creditGpa.id,+event.target.value);
      }

      return(
            <Col md={8} className='mb-3'>
                  <InputGroup>
                        <InputGroup.Prepend>
                              <InputGroup.Text>Credits</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                              className='mr-4'
                              type='number'
                              step='1'
                              placeholder='Example : 23'
                              value={credits}
                              onChange={creditChangeHandler}
                        />
                        <InputGroup.Prepend>
                              <InputGroup.Text>Grades</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control 
                              type='number'
                              step='0.001'
                              placeholder='Example : 7.432 '
                              value={gpa}
                              onChange={gpaChangeHandler}
                        />
                  </InputGroup>
            </Col>
      )
}

export default CreditGpaElement;