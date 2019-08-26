import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Navbar extends React.Component {
  render() {
    return (
        <div className='navbar'>
      
        <Nav>
          <NavItem>
              <NavLink className="nav-text" href="#">Home</NavLink>
          </NavItem>
          <NavItem>
              <NavLink className="nav-text" href="#">User</NavLink>
          </NavItem>
          <NavItem>
              <NavLink className="nav-text" href="#">Logout</NavLink>
          </NavItem>
      </Nav>
      </div>
    );
  }
}

export default Navbar;