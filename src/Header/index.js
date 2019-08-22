import React from 'react';
import NavBar from '../Nav';
const Header = (props) => {
	return(
		<div className="header">
		<NavBar logout={props.logout}/>
		</div>
	)
}

export default Header;