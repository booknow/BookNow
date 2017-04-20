import React,{ Component } from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import './Nav.css';


export default class NavComponent extends Component {

  render(){
      return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="home">Skema</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1}><Link to="/book">Book Appointment</Link></NavItem>
              </Nav>
              <Nav pullRight>
                <NavDropdown eventKey={3} title="Help" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Help Docs</MenuItem>
                  <MenuItem eventKey={3.2}>Take a Tour</MenuItem>
                </NavDropdown>

                <NavDropdown eventKey={3} title="Username" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}> <Link to="/userInfo">My Account</Link></MenuItem>

               <MenuItem eventKey={3.2}><Link to="/">Log Out</Link></MenuItem>

              </NavDropdown>




              </Nav>
            </Navbar.Collapse>
          </Navbar>
      )
  }
}
