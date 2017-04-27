import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,    
    ButtonToolbar,  
    ControlLabel,  
    Form,
    Grid,
    Col,
    Row,
    FormControl,
    FormGroup
} from 'react-bootstrap'
import './businessInfoStart.css';

export default class BusinessInfoStart extends Component {    
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>FIRST THINGS FIRST</h2>
                            <h4>Where does your customer email their questions?</h4>
                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={3}>
                                    Email
                                </Col>
                                <Col sm={9}>
                                    <FormControl type="email" placeholder="Email"/>
                                </Col>

                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>
                            <Button bsStyle="success" bsSize="large" block>
                                <Link to="/setup/1">Next</Link>
                            </Button>
                        </ButtonToolbar>

                    </Col>
                </Row>

            </Grid>
        )
    }
}
