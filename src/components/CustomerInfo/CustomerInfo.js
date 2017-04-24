import React, {Component} from "react";
import axios from "axios";

import { Link } from 'react-router-dom';

import "./CustomerInfo.css";

import { Grid, Row, Col, MenuItem, DropdownButton ,FormGroup, InputGroup,FormControl,Jumbotron ,Button, Table} from "react-bootstrap";



class CustomerInfo extends Component {


  constructor(){
          super()
          // this.state{
          //
          //   }

    }


    render(){
      return(

        <Grid>

          <Row>
            <Col sm={12}>
                <h1> Customers / First Name Last Name </h1>
            </Col>
          </Row>

          <Row>
              <Col sm={4} className="white-back">
                  <h3>Customer Info</h3>
              </Col>

              <Col sm={8}>
                <Col sm={6}>
                  <h3>Completed Bookings</h3>
                </Col>
                <Col sm={6}>
                    <button>Book Appointment</button>
                </Col>
              </Col>
          </Row>


        </Grid>
      )
    }

    }

export default CustomerInfo;
