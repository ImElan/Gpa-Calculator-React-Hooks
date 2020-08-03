import React from 'react';
import CreditGpaElement from './CreditGpaElement';
import { Row } from 'react-bootstrap';

function CreditGpaForm(props) {
      return(
            <Row className='justify-content-center mt-5'>
                  <CreditGpaElement />
            </Row>
      )
}

export default CreditGpaForm;