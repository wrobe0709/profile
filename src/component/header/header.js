import './header.scss';
import {Link} from "react-scroll";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="sm" fixed="top" className="header-background">
        {/* <Navbar.Brand>Will Robertson</Navbar.Brand> */}
        <Navbar.Brand>
          <Link
            style={{padding: '0.5rem 1rem'}}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span style={{cursor: 'pointer'}}>Home</span>
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link
              style={{padding: '0.5rem 1rem'}}
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span style={{cursor: 'pointer'}}>Resume</span>
            </Link>
            <Link
              style={{padding: '0.5rem 1rem'}}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span style={{cursor: 'pointer'}}>Projects</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
