import React from 'react';

import { Modal,Button } from 'react-bootstrap';

function ResultModal(props) {
      const { show,credit,result,message,handleClose,handleContinue } = props;

      const continueHandler = () => {
            handleClose();
            handleContinue();
      }

      return(
            <Modal 
                  centered
                  show={show} 
                  onHide={handleClose}
            >
                  <Modal.Header closeButton>
                        <Modal.Title>Your GPA</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <h6>Total Credits : {credit}</h6>
                        <h6>{message} : {result}</h6>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                        Close
                  </Button>
                  <Button variant="primary" onClick={continueHandler}>
                        Save
                  </Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default ResultModal;