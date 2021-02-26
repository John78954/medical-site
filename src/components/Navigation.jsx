import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../images/medical-logo.png';
// import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import '../css/Navigation.css';

class Navigation extends Component {
    render() {
      return (
        <div className="Navigation">
          <Navbar>
            <Navbar.Brand href="/"><img className="medical-logo" src={Logo} alt="Medical logo"></img></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/appointments">Appointments</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
          {/* <Nav defaultActiveKey="/" as="ul">
            <Nav.Item>
              <Nav.Link href="/"><img className="medical-logo" src={Logo}></img></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="/">
            <Button variant="primary">
              Home
            </Button>
            </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="/about">
            <Button variant="primary">
              About
            </Button>
            </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="/appointments">
            <Button variant="primary">
              Appointments
            </Button>
            </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="/contact">
            <Button variant="primary">
              Contact
            </Button>
            </Nav.Link>
            </Nav.Item> 
            <Nav.Item as="li">
            <Nav.Link href="/covid-19">
            <Button variant="primary">
              Covid-19
            </Button>
            </Nav.Link>
            </Nav.Item> 
            <Nav.Item as="li">
            <Nav.Link href="/blood-test">
            <Button variant="primary">
              Blood Test
            </Button>
            </Nav.Link>
            </Nav.Item> 
          </Nav> */}
        </div>
      )
    }
  }

export default Navigation;