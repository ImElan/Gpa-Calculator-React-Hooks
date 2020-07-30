import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

function NavItems(props) {
      const { path,as,name } = props;
      return(
            <Link 
                  href={path}
                  as={as}
                  passHref
            >     
                  <Nav.Link className='mr-4'> 
                        {name}
                  </Nav.Link>       
            </Link>
      )
}

export default NavItems;