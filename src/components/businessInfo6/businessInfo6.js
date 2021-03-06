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

export default class BusinessInfo6 extends Component {
  constructor(){
    super()
    this.state = {
      jobsNum:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({jobsNum: e.target.value})
  }
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
                                <Col xs={6} md={4}><FormControl value={this.state.jobsNum} onChange={this.handleChange} type="number" placeholder="1"/></Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>

                          {
                            this.state.jobsNum
                            ?
                            <Button  bsStyle="success" bsSize="large" block href="/home">
                                Finish
                            </Button>
                            :
                            <Button disabled bsStyle="success" bsSize="large" block href="/home">
                                Finish
                            </Button>
                          }
                            <Button bsStyle="success" bsSize="large" block href="/setup/5">
                                Previous

                            </Button>
                        </ButtonToolbar>

                    </Col>
                </Row>
                <div className="steps">
                  <p> 7 of 7</p>
                </div>
            </Grid>
        )
    }
}
