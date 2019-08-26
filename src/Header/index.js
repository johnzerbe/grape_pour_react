import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../beerlogo.svg';

class Header extends React.Component {
  render() {
    return (
      <Container className="header">
        <Row>
        <img src={Logo} height="65px" className="logo float-left" alt="Logo"/>
        </Row>
      </Container>
      
    );
  }
}

export default Header;