import React, {Component} from "react";
import {Link} from "react-router-dom"
import {Button,Table, ButtonToolbar ,Panel,ControlLabel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup} from 'react-bootstrap';
import '../businessInfoStart/businessInfoStart.css';


export default class BusinessInfo6 extends Component {
    render() {
        return (
          <Grid>
             <Row>
               <Col sm={8}>
                 <Form horizontal>
                   <h2>AVAILABILITY</h2>
                   <h4> Based on your number of teams, how many jobs can you do at any one time?</h4>
                   <FormGroup >
                     <Col xs={6} md={4}><FormControl placeholder="1"/></Col>
                   </FormGroup>
                 </Form>
               </Col>
            </Row>
            <Row>
          <Col className="next-btn" md={4} mdOffset={4}>

          <ButtonToolbar>
            <Col md={4} mdOffset={4}>
            <Button  className="" bsStyle="success" bsSize="large"><Link to="/home">Next</Link></Button>
            </Col>
          </ButtonToolbar>

        </Col>
      </Row>
          </Grid>
        )
    }
}