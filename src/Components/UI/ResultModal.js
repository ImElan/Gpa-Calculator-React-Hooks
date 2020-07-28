import React from 'react';

import { Modal,Button } from 'react-bootstrap';

function ResultModal(props) {
      const { show,credit,gpa,handleClose,handleSaveGpa } = props;
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
                        <h6>GPA : {gpa}</h6>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                        Close
                  </Button>
                  <Button variant="primary" onClick={handleSaveGpa}>
                        Save
                  </Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default ResultModal;