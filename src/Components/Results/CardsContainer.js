import React from 'react';
import GpaCgpaCard from './GpaCgpaCard';

import { Row } from 'react-bootstrap';

function CardsContainer(props) {
      const { data } = props;
      return(
            <Row>
                  {data && data.map( singleResult => (
                        <GpaCgpaCard
                              title={singleResult.title}
                              credits={singleResult.credits}
                              result={singleResult.result}
                              key={singleResult.id}
                              id={singleResult.id}
                        />
                  ))}
            </Row>
      )
}

export default CardsContainer;