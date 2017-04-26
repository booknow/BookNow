import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,
    Table,
    ButtonToolbar,
    Panel,
    ControlLabel,
    InputGroup,
    Form,
    Grid,
    Col,
    Row,
    FormControl,
    Checkbox,
    FormGroup
} from 'react-bootstrap'
import '../businessInfoStart/businessInfoStart.css';

export default class BusinessInfo2 extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>Please enter your Services</h2>
                            <h3>Please enter the types of Services you offer and at what price</h3>
                            <h4>Example: Hourly ABC Service - $99</h4>
                            <FormGroup >

                                <Row className="show-grid">
                                    <Col xs={12} md={8}><FormControl placeholder="Description"/></Col>
                                    <Col xs={6} md={4}>
                                        <InputGroup>
                                            <InputGroup.Addon>$</InputGroup.Addon>
                                            <FormControl type="text" placeholder="Price"/>
                                            <InputGroup.Addon>.00</InputGroup.Addon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Checkbox inline>
                                    {'This is hourly service'}
                                </Checkbox>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
              <Col className="next-btn" md={4} mdOffset={4}>

                <ButtonToolbar>
                  <Button bsStyle="success" bsSize="large" block><Link to="/setup/3">Next</Link></Button>
                  <Button bsStyle="success" bsSize="large" block><Link to="/setup/1">Previous</Link></Button>
                </ButtonToolbar>

            </Col>
          </Row>
            </Grid>
        )
    }
}
