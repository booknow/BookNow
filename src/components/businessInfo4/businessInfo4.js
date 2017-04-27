import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,
    Radio,

    ButtonToolbar,



    Form,
    Grid,
    Col,
    Row,
    FormControl,
    FormGroup
} from 'react-bootstrap';
import '../businessInfoStart/businessInfoStart.css';

export default class BusinessInfo4 extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>AVAILABILITY</h2>
                            <h4>What time of the day do you start your first job?</h4>
                            <FormGroup >
                                <Col xs={6} md={4}><FormControl placeholder="8"/></Col>
                                <Col xs={6} md={4}><FormControl placeholder="00"/></Col>
                                <Radio name="radioGroup" inline>
                                    {'Am'}
                                </Radio>

                                <Radio name="radioGroup" inline>
                                    {'Pm'}
                                </Radio>

                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>

                          { this.state.hour && this.state.min && (this.state.am || this.state.pm)
                            ?
                            <Button bsStyle="success" bsSize="large" block href="/setup/5">
                                Next
                            </Button>
                            :
                            <Button disabled bsStyle="success" bsSize="large" block href="/setup/5">
                                Next
                            </Button>
                          }
                            <Button bsStyle="success" bsSize="large" block href="/setup/3">
                                Previous

                            </Button>
                        </ButtonToolbar>

                    </Col>
                </Row>
            </Grid>
        )
    }
}
