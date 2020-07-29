import React from 'react';

import { Toast } from 'react-bootstrap';

function NotificationToast(props) {
      const { show,closeToast } = props;
      return(
            <Toast 
                  onClose={closeToast} 
                  show={show} 
                  style={{
                        position:'absolute',
                        bottom:'30px',
                        right:'30px',
                        width:'300px'
                        
                  }}
                  delay={3000} 
                  autohide
            >
                  <Toast.Header 
                        className='py-3 d-flex align-items-center'
                        style={{
                              width:'100%'
                        }}
                  >
                        <h5 className="mr-auto my-0">Gpa Saved</h5>
                  </Toast.Header>
            </Toast>
      )
}

export default NotificationToast;