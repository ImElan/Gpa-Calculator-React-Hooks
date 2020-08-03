import React from 'react';
import SubjectForm from '../../Components/GpaCalculation/SubjectForm';

import { Container } from 'react-bootstrap';

function CgpaCalculation() {
      return(
            <>
                  <Container className='mt-5'>
                        <SubjectForm 
                              tag='Semesters'
                        />
                  </Container>
            </>
      )
}

export default CgpaCalculation;