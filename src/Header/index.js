import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../beerlogo.svg';

class Header extends React.Component {
  render() {
    return (
      <Container className="header">
        <Row>
        <Col><img src={Logo} height="100px" className="logo float-left" alt="Logo"/></Col>
        </Row>
      </Container>
      
    );
  }
}

export default Header;