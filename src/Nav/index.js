import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navbar extends React.Component {
  render() {
    return (
        <div>
      
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
      </Nav>
      </div>
    );
  }
}

export default Navbar;