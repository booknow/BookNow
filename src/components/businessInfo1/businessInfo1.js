import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,
    Checkbox,
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
    FormGroup
} from 'react-bootstrap';

import '../businessInfoStart/businessInfoStart.css';
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper';

export default class BusinessInfo1 extends Component {

    constructor() {
        super()

        axios.post(API_BASE_URL + '/api/book', this.state).then(function(response) {console.log(response);})
        .catch(function(err) {console.log(err);})

    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>SERVICE TYPE</h2>
                            <h4>What Service do you offer? Please select from the list</h4>
                            <FormGroup >
                                <Checkbox inline>
                                    {'Lawncare'}
                                </Checkbox>

                                <Checkbox inline>
                                    {'Carpet cleaning'}
                                </Checkbox>

                                <Checkbox inline>
                                    {'home cleaning'}
                                </Checkbox>

                                <Checkbox inline>
                                    {'car detaling'}
                                </Checkbox>

                                <Checkbox inline>
                                    {'moving service'}
                                </Checkbox>
                                <Checkbox inline>
                                    {'Other'}
                                </Checkbox>
                              </FormGroup>
                          </Form>
                      </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>
                            <Col md={4} mdOffset={4}>
                                <Button className="" bsStyle="success" bsSize="large">
                                    <Link to="/businessInfo/2">Next</Link>
                                </Button>
                            </Col>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
