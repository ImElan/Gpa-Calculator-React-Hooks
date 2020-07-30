import React from 'react';
import CardsContainer from '../../Components/Results/CardsContainer';

import { Container } from 'react-bootstrap';

function Results(props) {
      const { data } = props; 
      return(
            <Container>
                  <CardsContainer 
                        data={data} 
                  />
            </Container>
      )
}

export default Results;