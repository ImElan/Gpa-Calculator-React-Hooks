import React from 'react'
import NavItems from './NavItems';

import { Navbar,Nav } from 'react-bootstrap';

import { navigationItems } from '../../Data/Navigation';

import Logo from '../../assets/logo.png';

function MainNavbar() {
      return(
            <Navbar bg="dark" expand="lg" variant="dark">
                  <Navbar.Brand>
                        <img
                              alt=""
                              src={Logo}
                              width="30"
                              height="30"
                              className="d-inline-block align-top mr-2"
                        />{' '}
                        Gpa Calculator
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                              { navigationItems.map( navItem => (
                                    <NavItems
                                          key={navItem.name}
                                          name={navItem.name}
                                          path={navItem.path}
                                          as={navItem.as}
                                    />
                              ))}
                        </Nav>
                  </Navbar.Collapse>
            </Navbar>
      )
}

export default MainNavbar;