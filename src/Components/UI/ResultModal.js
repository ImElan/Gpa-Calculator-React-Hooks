import React from 'react';

import { Modal,Button } from 'react-bootstrap';

function ResultModal(props) {
      const { show,handleClose,handleSaveGpa } = props;
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
                        Gpa and Credit goes here....
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