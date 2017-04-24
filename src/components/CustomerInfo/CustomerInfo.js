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
              <Col sm={4}>
                  <h2>Customer Info</h2>
              </Col>

              <Col sm={8}>
                    <h2>Completed Bookings</h2>
              </Col>
          </Row>


        </Grid>
      )
    }

    }

export default CustomerInfo;
