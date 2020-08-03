import React from 'react';
import CreditGpaElement from './CreditGpaElement';
import { Row } from 'react-bootstrap';

function CreditGpaForm(props) {
      const { creditGpaArray,changeCredit,changeGpa } = props;

      return(
            <Row className='justify-content-center mt-5'>
                  { creditGpaArray.map( creditGpa => (
                        <CreditGpaElement 
                              key={creditGpa.id}
                              creditGpa={creditGpa}
                              changeCredit={changeCredit}
                              changeGpa={changeGpa}
                        />
                  ))}
            </Row>
      )
}

export default CreditGpaForm;