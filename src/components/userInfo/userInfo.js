import React, {Component} from "react";
import {Link} from "react-router-dom"
import {Button, Table, ButtonToolbar ,Panel,ControlLabel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup} from 'react-bootstrap'
import './userInfo.css';

class UserInfo extends Component {
    render() {
        return (
< div className = "user-info-container" > <Grid>
    <Row>
        <Col sm={8}>
            <Form horizontal>
                <h2>Name</h2>
                <FormGroup >
                    <Col componentClass={ControlLabel} sm={3}>
                        Email
                    </Col>
                    <Col sm={9}>
                        <FormControl type="email" placeholder="Email"/>
                    </Col>
                </FormGroup>
                <FormGroup >
                    <Col componentClass={ControlLabel} sm={3}>
                        Name
                    </Col>
                    <Col sm={4}>
                        <FormControl type="text" placeholder="First Name"/>
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="Last Name"/>
                    </Col>

                </FormGroup>
                <h2>Address</h2>
                <FormGroup >
                    <Col componentClass={ControlLabel} sm={3}>
                        Address
                    </Col>
                    <Col sm={9}>
                        <FormControl type="text" placeholder="Street"/>
                    </Col>
                </FormGroup>

                <FormGroup >
                    <Col componentClass={ControlLabel} sm={3}></Col>
                    <Col sm={4}>
                        <FormControl type="text" placeholder="City"/>
                    </Col>

                    <Col sm={2}>

                        <FormControl componentClass="select" placeholder="ST">
                            <option value="ST"></option>
                            <option value="Arkansas">AK</option>
                            <option value="Alaska">AL</option>
                            <option value="Alaska">AR</option>
                            <option value="Alaska">AL</option>
                            <option value="Alaska">CA</option>
                            <option value="Alaska">CO</option>
                            <option value="Alaska">CT</option>
                            <option value="Alaska">DC</option>
                            <option value="Alaska">DE</option>
                            <option value="Arizona">FL</option>
                        </FormControl>
                    </Col>
                    <Col sm={3}>
                        <FormControl type="text" placeholder="Zip"/>
                    </Col>
                </FormGroup>
                <h2>Phone</h2>
                <FormGroup >
                    <Col componentClass={ControlLabel} sm={3}>
                        Phone
                    </Col>
                    <Col sm={9}>
                        <FormControl type="Phone" placeholder="Phone"/>
                    </Col>
                </FormGroup>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsSize="large">Save Changes</Button>
                  <Button bsStyle="warning" bsSize="large"><Link to="/home">Cancle</Link></Button>
      </ButtonToolbar>
              </Form>
            </Col>
            </Row>
            </Grid>
          </div>
        )
      }
    }
export default UserInfo;
// <FormGroup>
// <Col componentClass={ControlLabel} sm={3}>
//    Phone
//  </Col>
// <Col sm={9}>
//   <FormControl type="Phone" placeholder="Phone" />
// </Col>
// </FormGroup>
