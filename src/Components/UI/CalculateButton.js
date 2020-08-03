import React from 'react';

import { Row,Col,Button } from 'react-bootstrap';

function CalculateButton(props) {

      const { handleCalculate } = props;

      return(
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
            </Row>
      )
}

export default CalculateButton;