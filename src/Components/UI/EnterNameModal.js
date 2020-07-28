import React from 'react';

import { Modal,Button,Form } from 'react-bootstrap';
import { useInputState } from '../../hooks/useInputState';

function EnterNameModal(props) {
      
      const { show,handleClose,handleSaveGpa } = props;
      const [ name,handleChange,resetName ] = useInputState('');

      const saveGpa = () => {
            handleSaveGpa(name);
            resetName();
      }

      return(
            <Modal 
                  centered
                  show={show} 
                  onHide={handleClose}
            >
                  <Modal.Header closeButton>
                        <Modal.Title>Enter a name</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <Form.Group>
                              <Form.Label>Name</Form.Label>
                              <Form.Control 
                                    type='text' 
                                    placeholder='Example : Semester 1'
                                    value={name}
                                    onChange={handleChange}
                              />
                              <Form.Text className='text-muted'>
                                    Give it a meaningful name so that it will be easier for you to understand it later      
                              </Form.Text>
                        </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                        Close
                  </Button>
                  <Button variant="primary" onClick={saveGpa}>
                        Save
                  </Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default EnterNameModal;