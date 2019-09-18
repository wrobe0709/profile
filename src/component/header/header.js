import './header.scss';
import {Link} from "react-scroll";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="sm" fixed="top" className="header-background">
        <Navbar.Brand>
          <Link
            className="header-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className="header-cursor-pointer">Home</span>
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link
              className="header-link"
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="header-cursor-pointer">Resume</span>
            </Link>
            <Link
              className="header-link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="header-cursor-pointer">Projects</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
