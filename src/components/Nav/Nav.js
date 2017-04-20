import React,{ Component } from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import './Nav.css';


export default class NavComponent extends Component {

  render(){
      return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Skema</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
              
              </Nav>
              <Nav pullRight>
                <NavDropdown eventKey={3} title="Help" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Help Docs</MenuItem>
                  <MenuItem eventKey={3.2}>Take a Tour</MenuItem>
                </NavDropdown>

                <NavDropdown eventKey={3} title="Username" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>My Account</MenuItem>
                  <MenuItem eventKey={3.2}>Log Out</MenuItem>
                </NavDropdown>



              </Nav>
            </Navbar.Collapse>
          </Navbar>
      )
  }
}
