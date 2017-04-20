import React,{ Component } from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import './Nav.css';


export default class NavComponent extends Component {
  // constructor(){
  //   super()
  // }
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
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
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
