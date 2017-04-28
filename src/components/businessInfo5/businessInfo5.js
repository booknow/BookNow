import React, {Component} from "react";

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

export default class BusinessInfo5 extends Component {
  constructor() {
      super()
      this.state = {
        hour:''
       ,min:''
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, field) {
    this.setState({ [field]: e.target.value })
  }
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>AVAILABILITY</h2>
                            <h4>
                                On average how much time do you need between jobs?</h4>
                            <FormGroup >
                                <Col xs={6} md={4}><FormControl value={this.state.hour} onChange={(e)=>this.handleChange(e, "hour")} type='number' placeholder="2"/></Col>
                                <Col xs={6} md={4}><FormControl value={this.state.min} onChange={(e)=>this.handleChange(e, "min")} type='number' placeholder="00"/></Col>

                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>

                          {
                            this.state.hour && this.state.min
                            ?
                            <Button bsStyle="success" bsSize="large" block href="/setup/6">
                                Next
                            </Button>
                            :
                            <Button disabled bsStyle="success" bsSize="large" block href="/setup/6">
                                Next
                            </Button>
                          }
                            <Button bsStyle="success" bsSize="large" block href="/setup/4">
                                Previous
                            </Button>
                        </ButtonToolbar>

                    </Col>
                </Row>
            </Grid>
        )
    }
}
