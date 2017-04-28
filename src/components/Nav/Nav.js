import React,{ Component } from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import './Nav.css';
import {getUser} from "../../userService"

// var Droppie = require('react-droppie')

export default class NavComponent extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        first_name: null,
        id: null,
        last_name: null,
        user_email: null,
        user_password: null
      }
    }
    getUser().then(res=>{
      this.setState({user: res.data})
    })
  }

  render(){
    const navMargin = {
      marginBottom: '0px'
    }


       return (
          !(window.location.href.split("/").includes("client")) ?
            <Navbar style={navMargin} inverse>
            {window.location.pathname !== '/'
            ?
            <Navbar.Header>
              <Navbar.Brand>
              <Link to="/home"> Skema </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            :
            <Navbar.Header>
              <Navbar.Brand>
              <Link to="/#"> Skema </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          }
              <Navbar.Collapse>
              { window.location.pathname !== '/'
                ?
                <Nav>
                    <NavItem eventKey={1} href="/book">Book Appointment</NavItem>
                </Nav>
                :
                <Nav>
                    <NavItem eventKey={2} href="#">Book Appointment</NavItem>
                </Nav>
              }
                <Nav pullRight>
                  <NavDropdown eventKey={3} title="Help" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Help Docs</MenuItem>
                    <MenuItem eventKey={3.2}>Take a Tour</MenuItem>
                  </NavDropdown>

                  {window.location.pathname !== "/"
                    ?
                    <NavDropdown eventKey={3} title={this.state.user.first_name} id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1} href="/userInfo">My Account</MenuItem>

                      <MenuItem href="/" eventKey={3.2}>Log Out</MenuItem>

                    </NavDropdown>
                :
                null   }

                </Nav>
              </Navbar.Collapse>
            </Navbar>
          :
        null
      )
  }
}
