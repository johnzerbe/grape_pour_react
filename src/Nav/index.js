import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import App from '../App.css'

const NavBar = (props) => {
	return(
		<Nav>
          <NavLink href="#" onClick={props.logout}>Logout</NavLink> 
          <NavLink href="/home">Home</NavLink> 
          <NavLink href="/home/profile">Profile</NavLink> 
        </Nav>
		)
}

export default NavBar;