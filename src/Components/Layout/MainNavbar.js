import React from 'react'

import { Navbar } from 'react-bootstrap';
import Logo from '../../assets/logo.png';

function MainNavbar() {
      return(
            <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">
                        <img
                              alt=""
                              src={Logo}
                              width="30"
                              height="30"
                              className="d-inline-block align-top mr-2"
                        />{' '}
                        Gpa Calculator
                  </Navbar.Brand>
            </Navbar>
      )
}

export default MainNavbar;