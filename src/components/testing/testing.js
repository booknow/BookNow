import React, {Component} from "react";
import {Button, Table, ButtonToolbar ,Panel,ControlLabel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup} from 'react-bootstrap'

class Test extends Component {
    render() {
        return (
<div className = "user-info-container" > <Grid>
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

              </Form>
            </Col>
            </Row>
            </Grid>
          </div>
        )
      }
    }
export default Test;
