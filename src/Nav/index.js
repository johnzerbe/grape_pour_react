import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import App from '../App.css';

const NavBar = (props) => {
  return(
    <Nav>
          <NavLink className="nav-text" href="/home">Home</NavLink>
          <NavLink className="nav-text" href="#" onClick={props.logout}>Logout</NavLink> 
    </Nav>
  )
}

export default NavBar;