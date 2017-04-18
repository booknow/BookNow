import React, { Component } from "react";
import {Form, Grid, Col, Row, FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap'

class AddAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {



    return (
      <Grid>
        <Row>
          <Col md={10}>
            <h1>Add Appointment</h1>
            <p>Here</p>
          </Col>

          <Col md={10}>
          <Form horizontal>
            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
               Email
             </Col>
             <Col sm={10}>
               <FormControl type="email" placeholder="Email" />
             </Col>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">

              <Col sm={2}>
              <ControlLabel>Select</ControlLabel>
              </Col>
              <Col sm={10}>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Grid>



    )
  }
}

export default AddAppointment;
