import React from 'react';

import { Card, Button } from 'react-bootstrap';

function GpaCgpaCard(props) {
      const { title,credits,result } = props;
      return(
            <Card>
                  <Card.Body>
                        <Card.Title>Name : {title}</Card.Title>
                        <div className='d-flex mt-3'>
                              <Card.Subtitle className="mb-2 mr-5 text-muted">Total Credits : {credits}</Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted">GPA : {result}</Card.Subtitle>
                        </div>
                        <div className='mt-2 d-flex flex-column align-items-start flex-sm-row'>
                              <Button variant='warning' className='px-4 py-1 mb-2 mr-sm-3'>Edit</Button>
                              <Button variant='danger' className='px-4 py-1 mb-2 mr-sm-3'>Delete</Button>
                              <Button variant='info' className='px-4 py-1'>Add To CGPA Calculation</Button>
                        </div>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
            </Card>
      )
}

export default GpaCgpaCard;