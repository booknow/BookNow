import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,
    Checkbox,
    ButtonToolbar,
    Form,
    Grid,
    Col,
    Row,
    FormGroup
} from 'react-bootstrap'
import '../businessInfoStart/businessInfoStart.css';

export default class BusinessInfo3 extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>AVAILABILITY</h2>
                            <h4>Select the days you provide service</h4>
                            <FormGroup >
                                <Checkbox inline>
                                    {'Sunday'}
                                </Checkbox>

                                <Checkbox>
                                    {'Monday'}
                                </Checkbox>

                                <Checkbox>
                                    {'Tuesday'}
                                </Checkbox>

                                <Checkbox>
                                    {'Wednesday'}
                                </Checkbox>

                                <Checkbox>
                                    {'Thursday'}
                                </Checkbox>

                                <Checkbox>
                                    {'Friday'}
                                </Checkbox>

                                <Checkbox>
                                    {'Saturday'}
                                </Checkbox>

                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
              <Col className="next-btn" md={4} mdOffset={4}>

                <ButtonToolbar>
                  <Button bsStyle="success" bsSize="large" block><Link to="/setup/4">Next</Link></Button>
                  <Button bsStyle="success" bsSize="large" block><Link to="/setup/2">Previous</Link></Button>
                </ButtonToolbar>

            </Col>
          </Row>
            </Grid>
        )
    }
}
