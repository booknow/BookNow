import React,{ Component } from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import './Nav.css';
import {getUser} from "../../userService"

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
  }

  render(){
    getUser().then(res=>{
      console.log(res.data);
      this.setState({user: res.data})
    })
       return (
          <Navbar inverse collapseOnSelect>
          {window.location.pathname !== '/'
          ?
          <Navbar.Header>
            <Navbar.Brand>
              <a href="home">Skema</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          :
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Skema</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        }
            <Navbar.Collapse>
            { window.location.pathname !== '/'
              ?
              <Nav>
                <NavItem eventKey={1}><Link to="/book">Book Appointment</Link></NavItem>
              </Nav>
              :
              <Nav>
                <NavItem eventKey={1}><Link to="#">Book Appointment</Link></NavItem>
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
                    <MenuItem eventKey={3.1}> <Link to="/userInfo">My Account</Link></MenuItem>

                    <MenuItem eventKey={3.2}><Link to="/">Log Out</Link></MenuItem>

                  </NavDropdown>
              :
              null   }

              </Nav>
            </Navbar.Collapse>
          </Navbar>
      )
  }
}
