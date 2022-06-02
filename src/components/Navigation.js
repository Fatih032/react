import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Navigate } from "react-router-dom";


class Navigation extends Component {

  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/react">React Örnekleri</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/react/counter">Counter</Nav.Link>
            <Nav.Link href="/react/photogallery">Photo Gallery</Nav.Link>
            <Nav.Link href="/react/searchfilter">Search Filter</Nav.Link>
            <Nav.Link href="/react/login">Login</Nav.Link>
            <Nav.Link href="/react/button">Buttons</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
{/*         <Navigate to ="/react/button">Buttons</Navigate> */}
      </div>
    );
  }
}
export default Navigation;


