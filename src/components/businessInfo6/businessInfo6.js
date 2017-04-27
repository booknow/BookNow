import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,
    ButtonToolbar,
    Form,
    Grid,
    Col,
    Row,
    FormControl,
    FormGroup
} from 'react-bootstrap';
import '../businessInfoStart/businessInfoStart.css';

export default class BusinessInfo6 extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>AVAILABILITY</h2>
                            <h4>
                                Based on your number of teams, how many jobs can you do at any one time?</h4>
                            <FormGroup >
                                <Col xs={6} md={4}><FormControl placeholder="1"/></Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>
                            <Button bsStyle="success" bsSize="large" block>
                                <Link to="/home">Finish</Link>
                            </Button>
                            <Button bsStyle="success" bsSize="large" block>
                                <Link to="/setup/5">Previous</Link>
                            </Button>
                        </ButtonToolbar>

                    </Col>
                </Row>
            </Grid>
        )
    }
}
